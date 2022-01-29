import React, { useEffect, useState } from "react";
import "./DoubtPage.css";
import Trending from "../Trending/Trending";
import Answer from "./Answer/Answer";
import Question from "./Question/Question";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

function DoubtPage(props) {
  const [answers, setAnswers] = useState(null);
  const [doubt, setDoubt] = useState("");
  const { doubtId } = useParams();

  useEffect(() => {
    async function initData() {
      await axios.post("/api/doubt/get-doubt", { doubtId }).then((res) => {
        const data = res.data;
        if (data.doubtAnswers !== null) {
          setAnswers(data.doubtAnswers);
        }
        setDoubt(data.doubt);
      });
    }
    initData();
  }, [answers]);

  return (
    <div className="doubtPage">
      <div className="doubtPage-answer">
        <Question doubt={doubt} />
        {answers &&
          answers?.map((answer) => {
            if (answer) {
              return <Answer answer={answer} key={answer._id} />;
            }
          })}
      </div>
      <div className="doubtPage-trending">
        <Trending />
      </div>
    </div>
  );
}

export default DoubtPage;
