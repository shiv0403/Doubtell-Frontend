import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./MessagePage.css";
import MessageRoom from "./MessageRoom/MessageRoom";
import ChatWindow from "./ChatWindow/ChatWindow";
import axios from "../../api/axios";
import { io } from "socket.io-client";

function MessagePage(props) {
  const userId = useSelector((state) => state.user.id);
  const user = useSelector((state) => state.user);
  const [conversations, setConversations] = useState([]);
  const [convId, setConvId] = useState("");
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [userClicked, setUserClicked] = useState("");
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:5000");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        senderId: data.senderId,
        message: data.message,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      messages.filter(
        (message) => message.senderId === arrivalMessage.senderId
      ) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, messages]);

  useEffect(() => {
    socket?.current.emit("addUser", userId);
    socket.current.on("getUsers", (users) => {
      console.log(users);
    });
  }, [user]);

  useEffect(() => {
    async function getConversations() {
      await axios
        .get(`/api/conversation/get-conversations/${userId}`)
        .then((res) => {
          setConversations(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getConversations();
  }, [userId]);

  return (
    <div className="messagePage">
      <div className="messagePage-rooms">
        <input type={"text"} name={"roomName"} placeholder={"Search Chats"} />
        {conversations &&
          conversations?.map((conversation) => {
            return (
              <div>
                <MessageRoom
                  conversation={conversation}
                  setConvId={setConvId}
                  messages={messages}
                  setMessages={setMessages}
                  setUserClicked={setUserClicked}
                  key={conversation.id}
                />
              </div>
            );
          })}
      </div>
      <div className="messagePage-chatWindow">
        {userClicked ? (
          <ChatWindow
            receiver={userClicked}
            messages={messages}
            setMessages={setMessages}
            convId={convId}
            socket={socket}
            arrivalMessage={arrivalMessage}
          />
        ) : (
          <p>Select any chat</p>
        )}
      </div>
    </div>
  );
}

export default MessagePage;
