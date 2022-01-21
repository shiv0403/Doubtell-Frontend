import React from "react";
import "./ChatWindow.css";
import ChatHeader from "./ChatHeader/ChatHeader";
import Message from "./Message/Message";
import ChatInput from "./ChatInput/ChatInput";

function ChatWindow(props) {
  return (
    <div className={"chatWindow"}>
      <div className={"chatWindow-header"}>
        <ChatHeader />
      </div>
      <div className="chatWindow-top">
        <Message isMe={true} />
        <Message isMe={false} />
        <Message isMe={true} />
        <Message isMe={false} />
        <Message isMe={true} />
        <Message isMe={true} />
        <Message isMe={true} />
      </div>
      <div className="chatWindow-input">
        <ChatInput />
      </div>
    </div>
  );
}

export default ChatWindow;
