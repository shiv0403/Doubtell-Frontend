import React from "react";
import "./Feed.css";
import FeedBlock from "./Feed-Block/FeedBlock";

function Feed(props) {
  return (
    <div className="feed">
      <FeedBlock />
      <FeedBlock />
      <FeedBlock />
      <FeedBlock />
      <FeedBlock />
    </div>
  );
}

export default Feed;
