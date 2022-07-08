import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import "./FeedBlock.css";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

function FeedBlock({ doubt }) {
  return (
    <div className="shadow-lg rounded-md p-2 mb-5 w-full">
      <div className="flex justify-between items-center p-1">
        <div className="flex items-center">
          <Avatar sx={{ width: 28, height: 28 }} />
          <p
            style={{
              marginLeft: "10px",
              fontWeight: "600",
              fontSize: "16px",
              letterSpacing: "0.5px",
            }}
          >
            {doubt?.author_name}
          </p>
        </div>
        {/* <div className="feedBlock-more">
          <MoreHorizIcon />
        </div> */}
      </div>
      <div className="p-3 w-full">
        <div className="mb-0">
          <Link
            to={`/doubt/${doubt?._id}`}
            className={"feedBlock-navigateLink"}
          >
            <h3
              id={"feedBlock-doubtHeading"}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(doubt?.doubt),
              }}
              className="font-bold text-lg"
            ></h3>
          </Link>
        </div>
      </div>
      <div
        className="flex items-center justify-between"
        style={{ borderTop: "1px solid #eeeeee" }}
      >
        <div className="flex items-center">
          <div className="mr-3">
            <p className="flex items-center">
              <span className="mr-1 font-bold">
                {doubt?.doubt_answers.length}
              </span>{" "}
              answers
            </p>
          </div>
          <div>
            <p className="flex items-center">
              <span className="mr-1 font-bold">{doubt?.stars}</span> stars
            </p>
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
