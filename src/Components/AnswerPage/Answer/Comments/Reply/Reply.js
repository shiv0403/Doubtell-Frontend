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
    <div className={"reply"}>
      <div className={"reply-main"}>
        <textarea
          placeholder={"Write your reply..."}
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          className={"reply-input"}
        />
        <button onClick={handleReply} className={"reply-postBtn"}>
          Post
        </button>
      </div>
    </div>
  );
}

export default Reply;
