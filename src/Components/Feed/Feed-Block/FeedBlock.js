import React from "react";
import "./FeedBlock.css";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";

function FeedBlock(props) {
  return (
    <div className="feedBlock">
      <div className="feedBlock-header">
        <div className="feedBlock-author">
          <Avatar />
          <p style={{ marginLeft: "10px" }}>Shivansh Gupta</p>
        </div>
        <div className="feedBlock-more">
          <MoreHorizIcon />
        </div>
      </div>
      <div className="feedBlock-main">
        <div className="feedBlock-question">
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
        </div>
        <div className="feedBlock-answer">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            architecto corporis culpa ducimus impedit quia, quo reprehenderit
            saepe suscipit temporibus. Blanditiis iusto laudantium maxime
            numquam vel? Distinctio neque totam unde.
          </p>
        </div>
      </div>
      <div className="feedBlock-footer">
        <div className="feedBlock-footer-first">
          <SendIcon />
          <ShareIcon />
        </div>
        <div className="feedBlock-footer-second">
          <BookmarkBorderIcon />
        </div>
      </div>
    </div>
  );
}

export default FeedBlock;
