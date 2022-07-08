import React from "react";
import Subjects from "../Subjects/Subjects";
import "./Home.css";
import Feed from "../Feed/Feed";
import Trending from "../Trending/Trending";
import DoubtBtn from "../DoubtBtn/DoubtBtn";

function Home(props) {
  return (
    <div className="flex flex-row items-start mx-20 mt-10">
      <div className="basis-1/5">
        <div>
          <Subjects />
        </div>
        <div className="mt-20">
          <DoubtBtn />
        </div>
      </div>
      <div className="basis-1/2 mx-auto">
        <Feed />
      </div>
      <div className="basis-1/5">
        <Trending />
      </div>
    </div>
  );
}

export default Home;
