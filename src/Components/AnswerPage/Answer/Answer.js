import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { format } from "timeago.js";
import { useHistory } from "react-router-dom";
import DOMPurify from "dompurify";
import "./Answer.css";
import { Avatar } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ShareIcon from "@mui/icons-material/Share";
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
    <div
      className="w-3/5 mx-auto mb-10"
      style={{ border: "1px solid #c4c3c2" }}
    >
      <div className="flex items-center justify-between p-2 bg-offWhite">
        <div className="flex items-center">
          <Avatar />
          <div className="ml-2">
            <p className="font-bold text-md tracking-wide">
              {answer.author_name}
            </p>
            <p className="text-xs tracking-wider">{format(answer.createdAt)}</p>
          </div>
        </div>
        <div>
          <SendOutlinedIcon className="" onClick={handleConversation} />
        </div>
      </div>

      <div
        className="p-3 leading-6"
        id={"answer-main-id"}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(answer.answer) }}
      ></div>
      <div
        className="flex items-center justify-between p-1"
        style={{ borderTop: "1px solid #c4c3c2" }}
      >
        <div className="flex items-center ml-2">
          <div className={"flex items-center mr-2"}>
            {answerLiked ? (
              <ThumbUpIcon className="cursor-pointer" onClick={handleLike} />
            ) : (
              <ThumbUpOutlinedIcon
                className="cursor-pointer"
                onClick={handleLike}
              />
            )}
            <p className="ml-1">{likes}</p>
          </div>
          <div className="flex items-center mr-2">
            {answerDisliked ? (
              <ThumbDownIcon
                className="cursor-pointer"
                onClick={handleDislike}
              />
            ) : (
              <ThumbDownOffAltIcon
                className="cursor-pointer"
                onClick={handleDislike}
              />
            )}
            <p className="ml-1">{dislikes}</p>
          </div>
        </div>
        <div className="">
          {bookmarked ? (
            <BookmarkIcon
              onClick={handleUnbookmark}
              className="cursor-pointer mr-1"
            />
          ) : (
            <BookmarkBorderIcon
              className="cursor-pointer mr-1"
              onClick={handleBookmark}
            />
          )}
        </div>
      </div>
      <div className="mt-1">
        <Comments answerId={answer._id} />
      </div>
    </div>
  );
}

export default Answer;
