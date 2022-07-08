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
          setTrendings(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getTrendings();
  }, []);

  return (
    <div className="w-full rounded-t-md p-0">
      <h2 className="text-center bg-primary p-2 text-white tracking-wider font-bold rounded-t-md">
        Trending Doubts
      </h2>
      <div style={{ border: "1px solid lightGray" }}>
        {trendings &&
          trendings?.map((doubt) => {
            return (
              <div
                className="cursor-pointer p-2"
                style={{ borderBottom: "1px solid lightGray" }}
                onClick={() => history.push(`/doubt/${doubt._id}`)}
                key={doubt._id}
              >
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      DOMPurify.sanitize(doubt.doubt).slice(0, 50) + "...",
                  }}
                  className="text-12"
                ></p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Trending;
