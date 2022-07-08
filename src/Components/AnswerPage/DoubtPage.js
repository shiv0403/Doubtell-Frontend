import React, { useEffect, useState } from "react";
import "./DoubtPage.css";
import Trending from "../Trending/Trending";
import Answer from "./Answer/Answer";
import Question from "./Question/Question";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import { TailSpin } from "react-loader-spinner";

function DoubtPage(props) {
  const [answers, setAnswers] = useState(null);
  const [doubt, setDoubt] = useState("");
  const { doubtId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function initData() {
      setLoading(true);
      await axios
        .post("/api/doubt/get-doubt", { doubtId })
        .then((res) => {
          const data = res.data;
          if (data.doubtAnswers !== null) {
            setAnswers(data.doubtAnswers);
          }
          setDoubt(data.doubt);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
    initData();
  }, [doubtId]);

  return (
    <div className="flex items-start justify-around mx-24 my-8">
      <div className="doubtPage-answer relative">
        {loading && (
          <div className="absolute top-32 right-1/2">
            <TailSpin
              height="100"
              width="100"
              color="black"
              ariaLabel="loading"
            />
          </div>
        )}

        {doubt && <Question doubt={doubt} />}

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
