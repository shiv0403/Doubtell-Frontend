import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Comments.css";
import axios from "../../../../api/axios";
import Comment from "./Comment/Comment";

function Comments({ answerId }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [view, setView] = useState(false);
  const userId = useSelector((state) => state.user.id);

  useEffect(() => {
    async function getComments() {
      await axios
        .get(`/api/comment/comments-get/${answerId}`)
        .then((res) => {
          setComments(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    getComments();
  }, []);

  const handleComment = async () => {
    await axios
      .post("/api/comment/comment-post", {
        comment,
        userId,
        answerId,
        isSuperParent: true,
      })
      .then((res) => {
        console.log(res.data);
        setComment("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className={"comments"}>
      <div className="comments-write">
        <img
          src={"/assets/physics.jpg"}
          alt={"user"}
          className="comments-userImg"
        />
        <textarea
          placeholder={"Write your comment..."}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className={"comments-input"}
        />
        <button onClick={handleComment} className={"comments-postBtn"}>
          POST
        </button>
      </div>
      <button
        className={"comments-viewBtn"}
        onClick={() => setView((prev) => !prev)}
      >
        {view ? <span>Hide</span> : <span>View</span>} Comments
      </button>
      {view && (
        <div className={"comments-view"}>
          {comments &&
            comments.map((comment) => {
              if (comment.isSuperParent) {
                return <Comment comment={comment} answerId={answerId} />;
              }
            })}
        </div>
      )}
    </div>
  );
}

export default Comments;
