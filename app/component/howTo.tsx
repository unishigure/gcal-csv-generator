"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Link from "@mui/material/Link";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function HowToDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {"Usage"}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"How to add Google Calender events"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <ol className="list-decimal pl-4 pr-4">
              <li>{"テキストエディタでCSVファイルを新規作成する"}</li>
              <li>
                <b>{"Header Copy"}</b>
                {"ボタンを押下し、ヘッダーをクリップボードにコピー"}
              </li>
              <li>{"新規作成したCSVファイルの1行目にコピーする"}</li>
              <li>{"イベント内容を入力する"}</li>
              <li>
                <b>{"Event Copy"}</b>
                {"ボタンを押下し、クリップボードにコピー"}
              </li>
              <li>{"新規作成したCSVファイルの2行目以降にコピーする"}</li>
              <li>{"上記4~6を、追加したい予定の数だけ繰り返す"}</li>
              <li>
                {"作成したCSVファイルを"}
                <Link href="https://calendar.google.com/" underline="hover">
                  {"Googleカレンダー"}
                </Link>
                {"にインポートする"}
              </li>
            </ol>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            {"OK"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
