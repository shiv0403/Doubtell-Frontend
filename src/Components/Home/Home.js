import React from "react";
import Subjects from "../Subjects/Subjects";
import Tags from "../Tags/Tags";
import "./Home.css";
import Feed from "../Feed/Feed";
import Trending from "../Trending/Trending";

function Home(props) {
  return (
    <div className="home">
      <div className="home-subjects">
        <Subjects />
      </div>
      <div className="home-feed">
        <Feed />
      </div>
      {/*<Tags />*/}
      <div className="home-trend">
        <Trending />
      </div>
    </div>
  );
}

export default Home;
