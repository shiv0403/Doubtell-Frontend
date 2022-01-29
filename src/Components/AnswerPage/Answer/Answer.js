import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";
import "./Answer.css";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import axios from "../../../api/axios";

function Answer({ answer }) {
  const userId = useSelector((state) => state.user.id);
  const [likes, setLikes] = useState(answer.likes);
  const [dislikes, setDislikes] = useState(answer.disLikes);
  const [answerLiked, setAnswerLiked] = useState(false);
  const [answerDisliked, setAnswerDisliked] = useState(false);

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
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getInfo();
  }, [answer, answerLiked, answerDisliked]);

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
        console.log(res.data);
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
          <ModeCommentIcon className="answer-icon" />
          <BookmarkBorderIcon className="answer-icon" />
        </div>
      </div>
    </div>
  );
}

export default Answer;
