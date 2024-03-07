import React, { useEffect, useState } from "react";
import "./Feed.css";
import FeedBlock from "./Feed-Block/FeedBlock";
import axios from "../../api/axios";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import SearchBar from "../SearchBar/SearchBar";

function Feed(props) {
  const location = useLocation();

  let searchQuery = queryString.parse(location.search)?.query || "";
  let categoryQuery = queryString.parse(location.search)?.category || "";

  const [doubts, setDoubts] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getDoubts() {
      setLoading(true);

      await axios
        .get("/api/doubt/get-doubts", {
          params: {
            search: searchQuery,
            category: categoryQuery,
          },
        })
        .then((res) => {
          const data = res.data;
          setDoubts(data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
    setDoubts([]);
    getDoubts();
  }, [location]);

  return (
    <div className="relative w-9/12 mx-auto">
      {loading && (
        <div className="absolute top-40 bottom-1/2 right-1/2">
          <TailSpin
            height="100"
            width="100"
            color="black"
            ariaLabel="loading"
          />
        </div>
      )}
      <div className="mb-4">
        <SearchBar />
      </div>
      {doubts &&
        doubts.map((doubt) => {
          return doubt ? <FeedBlock doubt={doubt} key={doubt._id} /> : <></>;
        })}
      {doubts &&
        doubts.map((doubt) => {
          return doubt ? <FeedBlock doubt={doubt} key={doubt._id} /> : <></>;
        })}
      {doubts &&
        doubts.map((doubt) => {
          return doubt ? <FeedBlock doubt={doubt} key={doubt._id} /> : <></>;
        })}
      {doubts &&
        doubts.map((doubt) => {
          return doubt ? <FeedBlock doubt={doubt} key={doubt._id} /> : <></>;
        })}
      {doubts &&
        doubts.map((doubt) => {
          return doubt ? <FeedBlock doubt={doubt} key={doubt._id} /> : <></>;
        })}
      {doubts &&
        doubts.map((doubt) => {
          return doubt ? <FeedBlock doubt={doubt} key={doubt._id} /> : <></>;
        })}
      {doubts &&
        doubts.map((doubt) => {
          return doubt ? <FeedBlock doubt={doubt} key={doubt._id} /> : <></>;
        })}
    </div>
  );
}

export default Feed;
