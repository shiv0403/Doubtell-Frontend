import React from "react";
import Subjects from "../Subjects/Subjects";
import "./Home.css";
import Feed from "../Feed/Feed";
import Trending from "../Trending/Trending";
import DoubtBtn from "../DoubtBtn/DoubtBtn";

function Home(props) {
  return (
    <div className="flex flex-row items-start mx-20 mt-10">
      <div>
        <Feed />
      </div>
      <div>
        <Trending />
      </div>
    </div>
  );
}

export default Home;
