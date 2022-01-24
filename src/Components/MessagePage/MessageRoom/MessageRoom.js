import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./MessageRoom.css";
import axios from "../../../api/axios";

function MessageRoom({
  conversation,
  messages,
  setMessages,
  setUserClicked,
  setConvId,
}) {
  const userId = useSelector((state) => state.user.id);
  const [user, setUser] = useState("");

  useEffect(() => {
    async function getUser() {
      const id = conversation?.membersId.find((curr) => curr !== userId);
      await axios
        .get(`/api/user/get-user/${id}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getUser();
  }, [userId, conversation]);

  const getMessages = async () => {
    setUserClicked(user);
    setConvId(conversation._id);
    try {
      await axios
        .get(`/api/message/get-messages/${conversation._id}`)
        .then((res) => {
          setMessages(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={"message-room"} onClick={getMessages}>
      <img src={"/assets/physics.jpg"} alt={"shivansh"} />
      <div className="messageRoom-info">
        <p className={"messageRoom-username"}>{user.name}</p>
        <p className={"messageRoom-lastMessage"}>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
}

export default MessageRoom;
