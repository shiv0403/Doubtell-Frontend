import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { format } from "timeago.js";
import { useHistory } from "react-router-dom";
import DOMPurify from "dompurify";
import "./Answer.css";
import { Avatar } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import axios from "../../../api/axios";
import Comments from "./Comments/Comments";

function Answer({ answer }) {
  const history = useHistory();
  const userId = useSelector((state) => state.user.id);
  const [likes, setLikes] = useState(answer.likes);
  const [dislikes, setDislikes] = useState(answer.disLikes);
  const [answerLiked, setAnswerLiked] = useState(false);
  const [answerDisliked, setAnswerDisliked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    async function getInfo() {
      await axios
        .post("/api/user/get-answerInfo", {
          answerId: answer._id,
          userId,
        })
        .then((res) => {
          setAnswerLiked(res.data.userLiked);
          setAnswerDisliked(res.data.userDisliked);
          setBookmarked(res.data.userBookmark);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getInfo();
  }, []);

  const handleLike = async () => {
    await axios
      .post("/api/answer/like-answer", {
        answerId: answer._id,
        userId,
      })
      .then((res) => {
        setAnswerLiked((prev) => !prev);
        if (answerLiked) {
          setLikes((prev) => prev - 1);
        } else if (!answerLiked) {
          setLikes((prev) => prev + 1);
        }
        if (answerDisliked) {
          setAnswerDisliked(false);
          setDislikes((prev) => prev - 1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDislike = async () => {
    await axios
      .post("/api/answer/dislike-answer", {
        answerId: answer._id,
        userId,
      })
      .then((res) => {
        setAnswerDisliked((prev) => !prev);
        if (answerDisliked) {
          setDislikes((prev) => prev - 1);
        } else if (!answerDisliked) {
          setDislikes((prev) => prev + 1);
        }
        if (answerLiked) {
          setAnswerLiked(false);
          setLikes((prev) => prev - 1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBookmark = async () => {
    await axios
      .post("/api/user/bookmark-answer", {
        userId,
        answerId: answer._id,
      })
      .then((res) => {
        console.log(res.data);
        setBookmarked(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleUnbookmark = async () => {
    await axios
      .post("/api/user/un-bookmark-answer", {
        userId,
        answerId: answer._id,
      })
      .then((res) => {
        console.log(res.data);
        setBookmarked(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleConversation = async () => {
    await axios
      .post("/api/conversation/new-conversation", {
        senderId: userId,
        receiverId: answer.author_id,
      })
      .then((res) => {
        console.log(res.data);
        history.push("/message-page");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="answer">
      <div className="answer-header">
        <div className="answer-author">
          <Avatar />
          <div className="answer-authorDetails">
            <p className="answer-authorName">{answer.author_name}</p>
            <p className="answer-timestamp">{format(answer.createdAt)}</p>
          </div>
        </div>
        <div className="answer-options">
          <SendOutlinedIcon
            className="answer-icon"
            onClick={handleConversation}
          />
          <MoreHorizIcon className="answer-icon" />
        </div>
      </div>

      <div
        className="answer-main"
        id={"answer-main-id"}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(answer.answer) }}
      ></div>
      <div className="answer-footer">
        <div className="answer-first">
          <div className={"answer-like"}>
            {answerLiked ? (
              <ThumbUpIcon className="answer-icon" onClick={handleLike} />
            ) : (
              <ThumbUpOutlinedIcon
                className="answer-icon"
                onClick={handleLike}
              />
            )}
            <p>{likes}</p>
          </div>
          <div className="answer-dislike">
            {answerDisliked ? (
              <ThumbDownIcon className="answer-icon" onClick={handleDislike} />
            ) : (
              <ThumbDownOffAltIcon
                className="answer-icon"
                onClick={handleDislike}
              />
            )}
            <p>{dislikes}</p>
          </div>
        </div>
        <div className="answer-second">
          <ModeCommentOutlinedIcon className="answer-icon" />
          {bookmarked ? (
            <BookmarkIcon onClick={handleUnbookmark} />
          ) : (
            <BookmarkBorderIcon
              className="answer-icon"
              onClick={handleBookmark}
            />
          )}
        </div>
      </div>
      <div className="answer-comments">
        <Comments answerId={answer._id} />
      </div>
    </div>
  );
}

export default Answer;
