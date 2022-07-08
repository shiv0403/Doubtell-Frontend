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
  const [conversation, setConversation] = useState("");

  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [userClicked, setUserClicked] = useState("");

  const socket = useRef();

  useEffect(() => {
    socket.current = io("http://localhost:8900", { transports: ["websocket"] });
    socket.current.on("connect", () => {});
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        senderId: data.senderId,
        message: data.text,
        createdAt: Date.now(),
      });
    });

    return () => {
      setArrivalMessage("");
    };
  }, []);

  //whenever a new message comes
  useEffect(() => {
    arrivalMessage &&
      conversation?.membersId.includes(arrivalMessage.senderId) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, conversation]);

  useEffect(() => {
    //connecting this user to socket server
    socket.current.emit("addUser", user?.id);

    //getting the online users
    // socket.current.on("getUsers", (users) => {
    //   console.log(users);
    // });
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
    <div className="flex w-4/5 shadow-lg mx-auto h-80v mt-8">
      <div className="overflow-y-scroll overflow-x-hidden basis-1/4">
        <div className="w-4/5 mx-auto p-1">
          <input
            type={"text"}
            name={"roomName"}
            placeholder={"Search Chats"}
            className="px-2 py-1 w-full mx-auto my-2 text-sm rounded-md outline-none"
            style={{ border: "1px solid #c4c3c2" }}
          />
        </div>
        <div style={{ borderTop: "1px solid #eeeeee" }}>
          {conversations &&
            conversations?.map((conversation) => (
              <div key={conversation.id}>
                <MessageRoom
                  conversation={conversation}
                  setConvId={setConvId}
                  messages={messages}
                  setMessages={setMessages}
                  setUserClicked={setUserClicked}
                  setConversation={setConversation}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="basis-3/4">
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
          <div className="w-full h-80v text-center">
            <p className="mt-60 tracking-wider text-3xl text-coolGray">
              Select a chat / start new conversation
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MessagePage;
