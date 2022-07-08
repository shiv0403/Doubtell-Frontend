import React from "react";
import "./ChatHeader.css";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { IconButton } from "@mui/material";

function ChatHeader({ receiver }) {
  return (
    <div className={"flex justify-between px-4 py-2 bg-secondary"}>
      <div className="flex items-center">
        <div>
          <img
            className="h-10 w-10 rounded-3xl mr-2"
            src={"/assets/physics.jpg"}
            alt={"shivansh"}
          />
        </div>
        <div>
          <h3>{receiver.name}</h3>
          {/*todo*/}
          <p className="text-coolGray text-xs tracking-wider">
            Taking a Chill-pill
          </p>
        </div>
      </div>
      {/* <div className="flex items-center">
        <IconButton>
          <AttachFileOutlinedIcon />
        </IconButton>
        <IconButton>
          <MoreHorizOutlinedIcon />
        </IconButton>
      </div> */}
    </div>
  );
}

export default ChatHeader;
