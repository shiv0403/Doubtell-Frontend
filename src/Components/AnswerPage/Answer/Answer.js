import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import "./Answer.css";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import axios from "../../../api/axios";

function Answer({ answer }) {
  return (
    <div className="answer">
      <div className="answer-header">
        <div className="answer-author">
          <Avatar />
          <div className="answer-authorDetails">
            <p className="answer-authorName">{answer.author_name}</p>
            <p className="answer-timestamp">{answer.updatedAt}</p>
          </div>
        </div>
        <div className="answer-options">
          <VideocamIcon className="answer-icon" />
          <MoreHorizIcon className="answer-icon" />
        </div>
      </div>

      <div
        className="answer-main"
        id={"answer-main-id"}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(answer.answer) }}
      ></div>
      <div className="answer-footer">
        <div className="answer-like">
          <ThumbUpIcon className="answer-icon" />
          <ThumbDownOffAltIcon className="answer-icon" />
        </div>
        <div className="answer-other">
          <ModeCommentIcon className="answer-icon" />
          <BookmarkBorderIcon className="answer-icon" />
        </div>
      </div>
    </div>
  );
}

export default Answer;
