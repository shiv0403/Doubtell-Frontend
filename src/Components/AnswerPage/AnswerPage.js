import React, { useEffect, useState } from "react";
import "./AnswerPage.css";
import Trending from "../Trending/Trending";
import Answer from "./Answer/Answer";
import Question from "./Question/Question";
import { useLocation } from "react-router-dom";
import axios from "../../api/axios";

function AnswerPage(props) {
  const [doubt, setDoubt] = useState({});
  const [author, setAuthor] = useState("");
  const [doubtContent, setDoubtContent] = useState("");
  const [answers, setAnswers] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function initData() {
      setDoubt(location.state.doubt);
      setAuthor(location.state.author);
      setDoubtContent(location.state.doubtContent);

      await axios
        .post("/api/answer/get-answers", {
          answersId: location.state.doubt.doubt_answers,
        })
        .then((res) => {
          const data = res.data;
          // console.log(data);
          setAnswers(data);
        });
    }
    initData();
  }, []);

  return (
    <div className="answerPage">
      <div className="answerPage-answer">
        <Question doubt={doubt} author={author} doubtContent={doubtContent} />
        {answers?.map((answer) => (
          <Answer answer={answer} key={answer._id} />
        ))}
      </div>
      <div className="answerPage-trending">
        <Trending />
      </div>
    </div>
  );
}

export default AnswerPage;
