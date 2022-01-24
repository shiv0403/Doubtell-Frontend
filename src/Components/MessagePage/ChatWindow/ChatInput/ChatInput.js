import React, { useState } from "react";
import "./ChatInput.css";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "../../../../api/axios";

function ChatInput({
  conversationId,
  socket,
  receiver,
  messages,
  setMessages,
}) {
  const [message, setMessage] = useState("");
  const userId = useSelector((state) => state.user.id);

  const handleSubmit = async () => {
    socket.current.emit("sendMessage", {
      senderId: userId,
      receiverId: receiver._id,
      message,
    });

    try {
      await axios
        .post("/api/message/post-message", {
          senderId: userId,
          message,
          conversationId,
        })
        .then((res) => {
          setMessages((prev) => [
            ...prev,
            {
              senderId: userId,
              message,
              conversationId,
            },
          ]);
          setMessage("");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

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
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <IconButton className={"chatInput-icon"} onClick={handleSubmit}>
        <SendOutlinedIcon />
      </IconButton>
    </div>
  );
}

export default ChatInput;
