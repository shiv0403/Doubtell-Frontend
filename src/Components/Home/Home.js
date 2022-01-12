import React from "react";
import Subjects from "../Subjects/Subjects";
import Tags from "../Tags/Tags";

function Home(props) {
  return (
    <div className="home">
      <Subjects />
      <Tags />
      {/*    Feed*/}
      {/*    Trending*/}
    </div>
  );
}

export default Home;
