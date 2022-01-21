import React from "react";
import "./MessagePage.css";
import MessageRoom from "./MessageRoom/MessageRoom";
import ChatWindow from "./ChatWindow/ChatWindow";

function MessagePage(props) {
  return (
    <div className="messagePage">
      <div className="messagePage-rooms">
        <input type={"text"} name={"roomName"} placeholder={"Search Chats"} />
        <MessageRoom />
        <MessageRoom />
        <MessageRoom />
        <MessageRoom />
        <MessageRoom />
      </div>
      <div className="messagePage-chatWindow">
        <ChatWindow />
      </div>
    </div>
  );
}

export default MessagePage;
