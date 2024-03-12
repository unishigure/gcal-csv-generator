"use client";

import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "@mui/material/Link";

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
            <Button variant="contained" onClick={handleClickOpen}>
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
                <DialogContent sx={{ paddingBottom: "0" }}>
                    <DialogContentText id="alert-dialog-description">
                        <ol className="list-decimal pl-4 pr-4">
                            <li>{"テキストエディタでCSVファイルを新規作成する"}</li>
                            <li>
                                <b>{"Header Copy"}</b>
                                {"ボタンを押下し、ヘッダーをクリップボードにコピー"}
                            </li>
                            <li>{"新規作成したCSVファイルの1行目にペースト"}</li>
                            <li>{"イベント内容を入力する"}</li>
                            <li>
                                <b>{"Event Copy"}</b>
                                {"ボタンを押下し、イベントをクリップボードにコピー"}
                            </li>
                            <li>{"新規作成したCSVファイルの2行目以降にペースト"}</li>
                            <li>{"上記の4~6を、追加したいイベントの数だけ繰り返す"}</li>
                            <li>
                                {"作成したCSVファイルを"}
                                <Link
                                    href="https://calendar.google.com/calendar/u/0/r/settings/export"
                                    underline="hover"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    {"Google カレンダーにインポート"}
                                </Link>
                                {"する"}
                            </li>
                        </ol>
                        <Box
                            sx={{
                                display: "flex",
                                fontSize: "0.95rem",
                                marginTop: "0.5rem",
                                justifyContent: "right",
                            }}
                        >
                            <Link
                                href="https://support.google.com/calendar/answer/37118"
                                underline="hover"
                                target="_blank"
                                rel="noopener"
                            >
                                {"Google カレンダーに予定を読み込む - Google カレンダー ヘルプ"}
                            </Link>
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleClose} autoFocus>
                        {"OK"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
