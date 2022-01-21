import React from "react";
import "./Message.css";

function Message({ isMe }) {
  return (
    <div className={isMe ? "message left" : "message right"}>
      <p className={"message-timestamp"}>12:00 PM</p>
      <p
        className={
          isMe ? "message-mainMessage me" : "message-mainMessage notMe"
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, veniam.
      </p>
    </div>
  );
}

export default Message;
