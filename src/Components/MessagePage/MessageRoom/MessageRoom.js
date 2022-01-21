import React from "react";
import "./MessageRoom.css";

function MessageRoom(props) {
  return (
    <div className={"message-room"}>
      <img src={"/assets/physics.jpg"} alt={"shivansh"} />
      <div className="messageRoom-info">
        <p className={"messageRoom-username"}>Shivansh Gupta</p>
        <p className={"messageRoom-lastMessage"}>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
}

export default MessageRoom;
