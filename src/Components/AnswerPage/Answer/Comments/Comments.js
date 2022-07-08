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
    <div className={"p-2"} style={{ borderTop: "1px solid #c4c3c2" }}>
      <div className="flex items-center">
        <img
          src={"/assets/physics.jpg"}
          alt={"user"}
          className="h-7 w-7 rounded-2xl"
        />
        <textarea
          placeholder={"Write your comment..."}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className={
            "w-full mx-2 outline-none bg-offWhite rounded-lg p-2 h-9 text-sm tracking-wide resize-none border-none"
          }
        />
        <button
          onClick={handleComment}
          className="px-4 py-1 bg-primary text-white font-bold border-none outline-none rounded-lg tracking-wide"
        >
          Post
        </button>
      </div>
      <button
        className={
          "w-full border-2 outline-none bg-white text-center px-2 py-1 mt-3 rounded-md font-bold"
        }
        onClick={() => setView((prev) => !prev)}
      >
        {view ? <span>Hide</span> : <span>View</span>} Comments
      </button>
      {view && (
        <div className={"my-2"}>
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
