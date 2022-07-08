import React, { useState } from "react";
import "./Reply.css";
import { useSelector } from "react-redux";
import axios from "../../../../../api/axios";

function Reply({ comment, answerId }) {
  const [reply, setReply] = useState("");
  const [replyView, setReplyView] = useState(false);
  const userId = useSelector((state) => state.user.id);

  const handleReply = async () => {
    await axios
      .post("/api/comment/comment-post", {
        comment: reply,
        answerId,
        userId,
        isSuperParent: false,
        parent_commentId: comment._id,
      })
      .then((res) => {
        console.log(res.data);
        setReply("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className={"w-full"}>
      <div className={"flex items-start"}>
        <textarea
          placeholder={"Write your reply..."}
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          className={
            "w-4/5 mx-2 h-7 rounded-md px-2 py-1 text-sm bg-offWhite resize-none border-none outline-none"
          }
        />
        <button
          onClick={handleReply}
          className={
            "py-1 px-2 bg-primary ml-1 border-none outline-none rounded-md text-white text-sm tracking-wider"
          }
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default Reply;
