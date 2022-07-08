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
    console.log("receiver-->", receiver._id);
    //sending the message to socket server
    socket.current.emit("sendMessage", {
      senderId: userId,
      receiverId: receiver._id,
      text: message,
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
    <div className={"flex items-center mx-2 mb-2"}>
      <IconButton>
        <EmojiEmotionsOutlinedIcon />
      </IconButton>

      <input
        type={"text"}
        name={"message"}
        className={
          "tracking-wider w-full px-3 py-2 rounded-md outline-none bg-secondary my-atuo mx-2"
        }
        placeholder={"Enter your message"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="">
        <IconButton onClick={handleSubmit}>
          <SendOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatInput;
