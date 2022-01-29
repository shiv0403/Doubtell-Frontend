import React, { useEffect, useRef, useState } from "react";
import DOMPurify from "dompurify";
import { useSelector } from "react-redux";
import "./Question.css";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import CreateIcon from "@mui/icons-material/Create";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import EditorBox from "../../EditorBox/EditorBox";
import Button from "@mui/material/Button";
import axios from "../../../api/axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Question({ doubt }) {
  const editorRef = useRef(null);
  const authorId = useSelector((state) => state.user.id);
  const authorName = useSelector((state) => state.user.name);

  const [open, setOpen] = useState(false);
  const [starred, setStarred] = useState(false);
  const [stars, setStars] = useState(doubt.stars);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    async function getStarInfo() {
      await axios
        .post("/api/user/get-starInfo", {
          doubtId: doubt._id,
          userId: authorId,
        })
        .then((res) => {
          const data = res.data;
          setStarred(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    getStarInfo();
  }, []);

  const handleStar = async () => {
    await axios
      .post("/api/doubt/star-doubt", {
        doubtId: doubt._id,
        userId: authorId,
      })
      .then((res) => {
        console.log(res.data);
        setStarred(true);
        setStars((prev) => prev + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUnstar = async () => {
    await axios
      .post("/api/doubt/un-star-doubt", {
        doubtId: doubt._id,
        userId: authorId,
      })
      .then((res) => {
        console.log(res.data);
        setStarred(false);
        setStars((prev) => prev - 1);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = async () => {
    const content = editorRef.current.getContent();
    try {
      await axios
        .post("/api/answer/submit-answer", {
          content,
          doubtId: doubt._id,
          authorId,
          authorName,
        })
        .then((res) => {
          const answer = res.data;
          handleClose();
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="question">
      <h3
        className="question-main"
        id={"question-main-id"}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(doubt.doubt) }}
      ></h3>
      <div className="question-footer">
        <div className="question-author">
          <img
            src="/assets/physics.jpg"
            alt="author"
            className="question-authorImg"
          />
          <p>{doubt.author_name}</p>
          <div className="question-star">
            {starred ? (
              <StarIcon className="question-starIcon" onClick={handleUnstar} />
            ) : (
              <StarOutlineIcon
                className={"question-starIcon"}
                onClick={handleStar}
              />
            )}

            <p>{stars}</p>
          </div>
          <div className="question-share">
            <ShareIcon style={{ fontSize: "1.1rem", marginLeft: "10px" }} />
          </div>
        </div>
        {open && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <EditorBox editorRef={editorRef} />
              <div className={"question-submitAnswerBtn"}>
                <Button onClick={handleSubmit}>Submit Answer</Button>
              </div>
            </Box>
          </Modal>
        )}
        <div className="question-answer">
          <button className="question-answerBtn" onClick={handleOpen}>
            <p>Answer</p> <CreateIcon style={{ fontSize: "1rem" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
