import React from "react";
import Subjects from "../Subjects/Subjects";
import "./Home.css";
import Feed from "../Feed/Feed";
import Trending from "../Trending/Trending";
import DoubtBtn from "../DoubtBtn/DoubtBtn";

function Home(props) {
  return (
    <div className="flex items-start">
      <div className="basis-2/3">
        <Feed />
      </div>
      <div>
        <Trending />
      </div>
    </div>
  );
}

export default Home;
