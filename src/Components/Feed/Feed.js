import React, { useEffect, useState } from "react";
import "./Feed.css";
import FeedBlock from "./Feed-Block/FeedBlock";
import axios from "../../api/axios";

function Feed(props) {
  const [doubts, setDoubts] = useState([]);

  useEffect(() => {
    async function getDoubts() {
      try {
        await axios.get("/api/doubt/get-doubts").then((res) => {
          const data = res.data;
          console.log(data);
          setDoubts(data);
        });
      } catch (err) {
        console.log(err);
      }
    }
    getDoubts();
  }, []);

  return (
    <div className="feed">
      {doubts &&
        doubts.map((doubt) => {
          return <FeedBlock doubt={doubt} key={doubt._id} />;
        })}
    </div>
  );
}

export default Feed;
