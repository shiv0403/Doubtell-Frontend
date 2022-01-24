import React from "react";
import "./ChatHeader.css";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { IconButton } from "@mui/material";

function ChatHeader({ receiver }) {
  return (
    <div className={"chatHeader"}>
      <div className="chatHeader-left">
        <div className="chatHeader-img">
          <img src={"/assets/physics.jpg"} alt={"shivansh"} />
        </div>
        <div className="chatHeader-userDetails">
          <h3>{receiver.name}</h3>
          {/*todo*/}
          <p>Taking a Chill-pill</p>
        </div>
      </div>
      <div className="chatHeader-right">
        <IconButton className={"chatHeader-rightIcons"}>
          <AttachFileOutlinedIcon />
        </IconButton>
        <IconButton>
          <MoreHorizOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatHeader;
