import React from "react";
import "./ChatInput.css";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { IconButton } from "@mui/material";

function ChatInput(props) {
  return (
    <div className={"chatInput"}>
      <IconButton className={"chatInput-icon"} style={{ marginLeft: "10px" }}>
        <EmojiEmotionsOutlinedIcon />
      </IconButton>
      <IconButton className={"chatInput-icon"}>
        <MicOutlinedIcon />
      </IconButton>
      <input
        type={"text"}
        name={"message"}
        className={"chatInput-input"}
        placeholder={"Enter your message"}
      />
      <IconButton className={"chatInput-icon"}>
        <SendOutlinedIcon />
      </IconButton>
    </div>
  );
}

export default ChatInput;
