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
    <div className={"flex flex-col"}>
      <div>
        <ChatHeader receiver={receiver} />
      </div>
      <div
        className="overflow-y-scroll scrollbar-hide"
        style={{ msOverflowStyle: "none", height: "66vh" }}
      >
        {messages.map((message) => {
          return (
            <div ref={scrollRef} key={message._id}>
              <Message isMe={userId === message.senderId} message={message} />
            </div>
          );
        })}
      </div>
      <div className="">
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
