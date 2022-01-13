import React from "react";
import "./Question.css";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import CreateIcon from "@mui/icons-material/Create";
import ShareIcon from "@mui/icons-material/Share";

function Question(props) {
  return (
    <div className="question">
      <h3 className="question-main">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
        voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Delectus, ut.
      </h3>
      <div className="question-footer">
        <div className="question-author">
          <img
            src="/assets/physics.jpg"
            alt="author"
            className="question-authorImg"
          />
          <p>Author name</p>
          <div className="question-star">
            <StarOutlineIcon className="question-starIcon" />
            <p>5k+</p>
          </div>
          <div className="question-share">
            <ShareIcon style={{ fontSize: "1.1rem", marginLeft: "10px" }} />
          </div>
        </div>
        <div className="question-answer">
          <button className="question-answerBtn">
            <p>Answer</p> <CreateIcon style={{ fontSize: "1rem" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
