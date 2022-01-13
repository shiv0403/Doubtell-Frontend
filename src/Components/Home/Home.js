import React from "react";
import Subjects from "../Subjects/Subjects";
import "./Home.css";
import Feed from "../Feed/Feed";
import Trending from "../Trending/Trending";
import DoubtBtn from "../DoubtBtn/DoubtBtn";

function Home(props) {
  return (
    <div className="home">
      <div className="home-subjects">
        <Subjects />
        <DoubtBtn />
      </div>
      <div className="home-feed">
        <Feed />
      </div>
      <div className="home-trend">
        <Trending />
      </div>
    </div>
  );
}

export default Home;
