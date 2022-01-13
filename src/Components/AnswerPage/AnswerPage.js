import React from "react";
import "./AnswerPage.css";
import Trending from "../Trending/Trending";
import Answer from "./Answer/Answer";

function AnswerPage(props) {
  return (
    <div className="answerPage">
      <div className="answerPage-answer">
        <Answer />
      </div>
      <div className="answerPage-trending">
        <Trending />
      </div>
    </div>
  );
}

export default AnswerPage;
