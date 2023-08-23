"use client";

import 'dayjs/locale/ja';

import dayjs, { Dayjs } from 'dayjs';
import { forwardRef, useState } from 'react';

import { Box, Button, Checkbox, Snackbar, TextField } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { randomId } from '@mui/x-data-grid-generator';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ScheduleForm(scheduleRows: Array<Object>) {
  const [rows, setRows] = useState(scheduleRows);

  const [subject, setSubject] = useState<string>("");
  const [start_date, setStartDate] = useState<Dayjs>(dayjs());
  const [start_time, setStartTime] = useState<Dayjs | null>(null);
  const [end_date, setEndDate] = useState<Dayjs | null>(null);
  const [end_time, setEndTime] = useState<Dayjs | null>(null);
  const [is_all_day, setIsAllDay] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [is_private, setIsPrivate] = useState<boolean>(false);

  const [openInvalid, setOpenInvalid] = useState<boolean>(false);
  const [openCopied, setOpenCopied] = useState<boolean>(false);
  const [openFailed, setOpenFailed] = useState<boolean>(false);

  function handleClickHeaderCopy() {
    const tag =
      `Subject,Start Date,Start Time,End Date,End Time,` +
      `All Day Event,Description,Location,Private\n`;
    copyToClipboard(tag);
  }

  function handleClickCopy() {
    if (!start_date || !start_date.isValid()) {
      setOpenInvalid(true);
      return;
    }

    const newEvent = {
      id: randomId(),
      sub: subject,
      sd: start_date.format("YYYY/MM/DD"),
      st: start_time ? start_time.format("HH:mm") : "",
      ed: end_date ? end_date.format("YYYY/MM/DD") : "",
      et: end_time ? end_time.format("HH:mm") : "",
      isAl: is_all_day,
      des: description,
      loc: location,
      isPr: is_private,
    };
    const tag =
      `${newEvent.sub},` +
      `${newEvent.sd},${newEvent.st},${newEvent.ed},${newEvent.et},` +
      `${newEvent.isAl},${newEvent.des},${newEvent.loc},${newEvent.isPr}`;

    copyToClipboard(tag);
  }

  const handleCloseInvalid = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpenInvalid(false);
  };

  const handleCloseCopied = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpenCopied(false);
  };

  const handleCloseFailed = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpenFailed(false);
  };

  function copyToClipboard(tagValue: string) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(tagValue);
      setOpenCopied(true);
    } else {
      setOpenFailed(true);
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
      <Box className="m-4 pb-4 border" sx={{ boxShadow: 3 }}>
        <Box className="m-4 p-4">
          <TextField
            autoFocus
            label="Subject"
            value={subject}
            variant="standard"
            helperText="予定の名前"
            onChange={(event) => {
              setSubject(event.target.value);
            }}
            sx={{ width: "100%" }}
          />
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={openInvalid}
            autoHideDuration={3000}
            onClose={handleCloseInvalid}
          >
            <Alert
              onClose={handleCloseInvalid}
              severity="error"
              sx={{ width: "100%" }}
            >
              Start Date is Required.
            </Alert>
          </Snackbar>
        </Box>
        <Box className="m-4">
          <DatePicker
            label="Start Date"
            value={start_date}
            defaultValue={dayjs()}
            slotProps={{
              actionBar: { actions: ["today"] },
              textField: {
                helperText: "予定の開始日",
              },
            }}
            onChange={(event) => {
              if (event) {
                setStartDate(event);
              }
            }}
          />
          <TimePicker
            label="Start Time"
            value={start_time}
            slotProps={{
              actionBar: { actions: ["clear"] },
              textField: {
                helperText: "予定の開始時刻",
              },
            }}
            onChange={(value) => {
              setStartTime(value);
            }}
          />
        </Box>
        <Box className="m-4">
          <DatePicker
            label="End Date"
            value={end_date}
            slotProps={{
              actionBar: { actions: ["clear", "today"] },
              textField: {
                helperText: "予定の終了日",
              },
            }}
            onChange={(event) => {
              setEndDate(event);
            }}
          />
          <TimePicker
            label="End Time"
            value={end_time}
            slotProps={{
              actionBar: { actions: ["clear"] },
              textField: {
                helperText: "予定の終了時刻",
              },
            }}
            onChange={(value) => {
              setEndTime(value);
            }}
          />
        </Box>
        <Box className="m-4 flex">
          <Checkbox
            value={is_all_day}
            onChange={() => {
              setIsAllDay(!is_all_day);
            }}
          />
          <span className="mt-auto mb-auto">All Day Event</span>
          <span className="mt-auto mb-auto ml-2 text-xs">
            終日の予定かどうかを示します。
          </span>
        </Box>
        <Box className="m-4">
          <TextField
            label="Description"
            value={description}
            multiline
            helperText="予定についての説明またはメモ"
            variant="outlined"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            sx={{ width: "100%" }}
          />
        </Box>
        <Box className="m-4">
          <TextField
            label="Location"
            value={location}
            helperText="予定の場所"
            variant="outlined"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
            sx={{ width: "100%" }}
          />
        </Box>
        <Box className="m-4 flex">
          <Checkbox
            value={is_private}
            onChange={() => {
              setIsPrivate(!is_private);
            }}
          />
          <span className="mt-auto mb-auto">Private</span>
          <span className="mt-auto mb-auto ml-2 text-xs">
            予定を限定公開にするかどうかを指定します。
          </span>
        </Box>
        <Box sx={{ margin: "1rem", display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            onClick={handleClickHeaderCopy}
            sx={{ margin: "0 0.25rem", boxShadow: 2 }}
          >
            {"Header Copy"}
          </Button>
          <Button
            variant="contained"
            onClick={handleClickCopy}
            sx={{ margin: "0 0.25rem" }}
          >
            {"Event Copy"}
          </Button>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={openCopied}
            autoHideDuration={3000}
            onClose={handleCloseCopied}
          >
            <Alert
              onClose={handleCloseCopied}
              severity="success"
              sx={{ width: "100%" }}
            >
              Copied!
            </Alert>
          </Snackbar>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={openFailed}
            autoHideDuration={3000}
            onClose={handleCloseFailed}
          >
            <Alert
              onClose={handleCloseFailed}
              severity="error"
              sx={{ width: "100%" }}
            >
              Copy to clipboard is unsupported.
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
