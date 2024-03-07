import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import "./FeedBlock.css";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareIcon from "@mui/icons-material/Share";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

function FeedBlock({ doubt }) {
  return (
    <div className="shadow-lg rounded-md mb-5">
      <div className="flex justify-between items-center px-3 py-2">
        <div className="flex items-center">
          <Avatar sx={{ width: 25, height: 25 }} />
          <p
            style={{
              marginLeft: "7px",
              fontWeight: "600",
              fontSize: "14px",
              letterSpacing: "0.5px",
            }}
          >
            {doubt?.author_name}
          </p>
        </div>
      </div>
      <div className="px-3 py-1 w-full rounded-md">
        <div className="mb-0">
          <Link
            to={`/doubt/${doubt?._id}`}
            className={"feedBlock-navigateLink"}
          >
            <h1
              id={"feedBlock-doubtHeading"}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(doubt?.doubt).trim(),
              }}
              className="text-md"
            ></h1>
          </Link>
        </div>
      </div>
      <div
        className="flex items-center justify-between text-sm py-1 px-3"
        style={{ borderTop: "1px solid #eeeeee" }}
      >
        <div className="flex items-center">
          <div className="mr-3">
            <p className="flex items-center">
              <ChatBubbleOutlineOutlinedIcon
                style={{ height: "20px", width: "17px" }}
              />
              <span className="ml-1 font-bold">
                {doubt?.doubt_answers.length}
              </span>{" "}
            </p>
          </div>
          <div className="flex items-center">
            <StarBorderIcon style={{ height: "20px", width: "20px" }} />
            <span className="ml-1 font-bold">{doubt?.stars}</span>
          </div>
        </div>
        <div className="feedBlock-footer-second">
          <div>
            <p className="text-coolGray text-sm">{format(doubt?.createdAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedBlock;
