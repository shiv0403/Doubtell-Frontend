import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DOMPurify from "dompurify";
import "./Trending.css";
import axios from "../../api/axios";

function Trending(props) {
  const history = useHistory();
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    async function getTrendings() {
      await axios
        .get("/api/doubt/trendings")
        .then((res) => {
          console.log(res.data);
          setTrendings(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getTrendings();
  }, []);

  return (
    <div className="trending">
      <h2 className="trending-heading">Trending Doubts</h2>
      {trendings &&
        trendings?.map((doubt) => {
          return (
            <div
              className="trending-doubt"
              onClick={() => history.push(`/doubt/${doubt._id}`)}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(doubt.doubt),
                }}
              ></p>
            </div>
          );
        })}
    </div>
  );
}

export default Trending;
