import React from "react";
import "./Message.css";
import { format } from "timeago.js";

function Message({ isMe, message }) {
  return (
    <div className={isMe ? "message left" : "message right"}>
      <p className={"message-timestamp"}>{format(message.createdAt)}</p>
      <p
        className={
          isMe ? "message-mainMessage me" : "message-mainMessage notMe"
        }
      >
        {message.message}
      </p>
    </div>
  );
}

export default Message;
