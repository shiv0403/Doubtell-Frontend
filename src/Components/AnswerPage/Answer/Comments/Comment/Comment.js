import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Comment.css";
import axios from "../../../../../api/axios";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import Reply from "../Reply/Reply";

const commentImgLink =
  "data:image/png;base64,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";

function Comment({ comment, answerId }) {
  const [viewReply, setViewReply] = useState(true);
  const [replyView, setReplyView] = useState(false);
  const [replyInput, setReplyInput] = useState(false);

  const userId = useSelector((state) => state.user.id);

  const viewCommentReply = async (event, commentId) => {
    console.log(commentId);
    event.target.style.display = "none";
    await axios
      .get(`/api/comment/replies-get/${commentId}`)
      .then((res) => {
        let replies_array = res.data;
        setViewReply(false);
        for (let i = 0; i < replies_array.length; ++i) {
          //create new div of reply
          let reply = document.createElement("div");
          let reply_header = document.createElement("div");
          let reply_footer = document.createElement("div");

          //header
          let img = document.createElement("img");
          let content = document.createElement("p");
          img.className = "comments-userImg";
          img.src = "/assets/chemistry.jpg";
          content.innerHTML = replies_array[i].comment;

          reply_header.appendChild(img);
          reply_header.appendChild(content);

          //header class-name
          reply_header.className = "comment-replies-div";

          //footer
          let img_comment = document.createElement("img");
          img_comment.className = "comment-img";
          img_comment.src = commentImgLink;
          img_comment.addEventListener("click", () => {
            setReplyView((prev) => !prev);
          });
          reply_footer.appendChild(img_comment);

          let reply_div = document.createElement("div");
          let reply_input = document.createElement("textarea");
          let reply_postBtn = document.createElement("button");
          reply_input.className = "reply-input";
          reply_input.placeholder = "Write your reply...";
          reply_postBtn.className = "reply-postBtn";
          reply_postBtn.innerHTML = "Reply";

          //reply to comment
          reply_postBtn.onclick = async () => {
            if (reply_input.value !== "") {
              await axios
                .post("/api/comment/comment-post", {
                  comment: reply_input.value,
                  answerId,
                  userId,
                  isSuperParent: false,
                  parent_commentId: replies_array[i]._id,
                })
                .then((res) => {
                  console.log(res.data);
                  reply_input.value = "";
                })
                .catch((err) => {
                  console.log(err.message);
                });
            }
          };

          reply_div.appendChild(reply_input);
          reply_div.appendChild(reply_postBtn);
          reply_div.className = "reply-main";

          reply_footer.appendChild(reply_div);

          let replyBtn = document.createElement("button");
          replyBtn.innerHTML = "View Replies";
          replyBtn.className = "comment-replyBtn";

          reply_footer.appendChild(replyBtn);

          //footer class-name
          reply_footer.className = "comment-replies-footer";
          // reply_footer.style.marginLeft = "60px";

          reply.style.marginLeft =
            event.target.parentNode.style.marginLeft + "30px";

          console.log(event.target.parentNode);

          reply.appendChild(reply_header);
          reply.appendChild(reply_footer);

          replyBtn.onclick = (e) => {
            viewCommentReply(e, replies_array[i]._id);
          };

          if (replies_array[i].replies.length === 0) {
            replyBtn.style.display = "none";
          }

          event.target.parentNode.parentNode.appendChild(reply);

          // document
          //   .getElementsByClassName("comment-replies-main")[0]
          //   .appendChild(reply);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hideCommentReplies = () => {};

  const handleReply = () => {};

  return (
    <div className={"comment"}>
      <div className="comment-content">
        <img
          src={"/assets/chemistry.jpg"}
          alt={"user"}
          className={"comments-userImg"}
        />
        <p>{comment.comment}</p>
      </div>
      <div className="comment-replies comment-first-rep">
        <div className="comment-replies-header">
          <ModeCommentOutlinedIcon
            onClick={() => setReplyInput((prev) => !prev)}
          />
          {/*{replyInput && <Reply />}*/}
          {comment.replies.length > 0 && !replyInput ? (
            <button
              className={"comment-replyBtn"}
              onClick={(e) => viewCommentReply(e, comment._id)}
              style={{ display: `${viewReply ? "block" : "none"}` }}
            >
              View Replies
            </button>
          ) : (
            <Reply comment={comment} answerId={answerId} />
          )}
        </div>
        <div className="comment-replies-main"></div>
      </div>
    </div>
  );
}

export default Comment;
