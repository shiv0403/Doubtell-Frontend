import React from "react";
import "./DoubtBtn.css";
import { Link } from "react-router-dom";

function DoubtBtn(props) {
  return (
    <div className="doubt-btn">
      <p className="doubt-btn-label">Having any doubt?</p>
      <Link to="/post-doubt">
        <button className="doubt-btn-btn">Post a Doubt</button>
      </Link>
    </div>
  );
}

export default DoubtBtn;
