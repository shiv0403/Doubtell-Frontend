import React, { useEffect, useRef } from "react";
import "./ChatWindow.css";
import ChatHeader from "./ChatHeader/ChatHeader";
import Message from "./Message/Message";
import ChatInput from "./ChatInput/ChatInput";
import { useSelector } from "react-redux";

function ChatWindow({
  receiver,
  messages,
  setMessages,
  convId,
  socket,
  arrivalMessage,
}) {
  const userId = useSelector((state) => state.user.id);
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={"chatWindow"}>
      <div className={"chatWindow-header"}>
        <ChatHeader receiver={receiver} />
      </div>
      <div className="chatWindow-top">
        {messages.map((message) => {
          return (
            <div ref={scrollRef}>
              <Message
                isMe={userId === message.senderId}
                message={message}
                key={message._id}
              />
            </div>
          );
        })}
      </div>
      <div className="chatWindow-input">
        <ChatInput
          conversationId={convId}
          socket={socket}
          receiver={receiver}
          messages={messages}
          setMessages={setMessages}
        />
      </div>
    </div>
  );
}

export default ChatWindow;
