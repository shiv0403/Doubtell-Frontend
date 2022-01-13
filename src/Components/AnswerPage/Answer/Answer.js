import React from "react";
import "./Answer.css";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Answer(props) {
  return (
    <div className="answer">
      <div className="answer-header">
        <div className="answer-author">
          <Avatar />
          <div className="answer-authorDetails">
            <p className="answer-authorName">Author Name</p>
            <p className="answer-timestamp">Timestamp</p>
          </div>
        </div>
        <div className="answer-options">
          <VideocamIcon className="answer-icon" />
          <MoreHorizIcon className="answer-icon" />
        </div>
      </div>
      <div className="answer-main">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi
          delectus doloribus ea eos eum ex excepturi in iste libero maxime
          perspiciatis, quaerat, quia repellendus sapiente ut veniam voluptate
          voluptatibus. A aliquid commodi cumque dolorem et expedita fugiat
          itaque non officia perspiciatis placeat praesentium quibusdam rerum
          sit, tenetur vel voluptatibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eligendi
          et labore possimus quas tempora. Asperiores consectetur doloremque
          eveniet, fuga fugiat impedit iste laborum minima minus officiis
          placeat quidem quis quo repellat sapiente similique tenetur vel vero
          vitae voluptas voluptate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut
          dolorem fugit, minima neque non odio praesentium vel! Cumque ducimus
          ex labore, maiores modi nam quaerat repellat temporibus tenetur! Amet
          esse incidunt iusto maiores neque officiis quam tempore temporibus
          tenetur.
        </p>
      </div>
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
