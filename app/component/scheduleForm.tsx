"use client";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { Button, Checkbox, TextField } from "@mui/material";
import dayjs from "dayjs";
import "dayjs/locale/ja";

import { GridRowsProp } from "@mui/x-data-grid";

var rows: GridRowsProp = [
  {
    id: 1,
    sub: "workday",
    sd: "2023/08/21",
    st: "09:00",
    ed: "2023/08/21",
    et: "18:00",
    isAl: "False",
    des: "Hello, working.",
    loc: "office",
    isPr: "True",
  },
];

export default function ScheduleForm() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
      <div className="m-4 pb-4 border">
        <div className="m-4 p-4">
          <TextField
            required
            id="subject"
            label="Subject"
            variant="standard"
            helperText="予定の名前"
          />
        </div>
        <div className="m-4">
          <DatePicker
            label="Start Date"
            defaultValue={dayjs()}
            slotProps={{
              actionBar: { actions: ["today", "clear"] },
              textField: {
                helperText: "予定の開始日",
              },
            }}
          />
          <TimePicker
            label="Start Time"
            slotProps={{
              actionBar: { actions: ["clear"] },
              textField: {
                helperText: "予定の開始時刻",
              },
            }}
          />
        </div>
        <div className="m-4">
          <DatePicker
            label="End Date"
            defaultValue={dayjs()}
            slotProps={{
              actionBar: { actions: ["today", "clear"] },
              textField: {
                helperText: "予定の終了日",
              },
            }}
          />
          <TimePicker
            label="End Time"
            slotProps={{
              actionBar: { actions: ["clear"] },
              textField: {
                helperText: "予定の終了時刻",
              },
            }}
          />
        </div>
        <div className="m-4 flex">
          <Checkbox id="is-all-day-event" />
          <span className="mt-auto mb-auto">All Day Event</span>
          <span className="mt-auto mb-auto ml-2 text-xs">
            終日の予定かどうかを示します。
          </span>
        </div>
        <div className="m-4">
          <TextField
            label="Description"
            multiline
            helperText="予定についての説明またはメモ"
            variant="outlined"
          />
        </div>
        <div className="m-4">
          <TextField
            label="Location"
            helperText="予定の場所"
            variant="outlined"
          />
        </div>
        <div className="m-4 flex">
          <Checkbox
            id="is-private"
            onChange={() => {
              alert("checked");
            }}
          />
          <span className="mt-auto mb-auto">Private</span>
          <span className="mt-auto mb-auto ml-2 text-xs">
            予定を限定公開にするかどうかを指定します。
          </span>
        </div>
        <div className="w-20 ml-auto mr-0">
          <Button
            id="add"
            variant="contained"
            onClick={() => {
              alert("clicked");
            }}
          >
            <span>Add</span>
          </Button>
        </div>
      </div>
    </LocalizationProvider>
  );
}
