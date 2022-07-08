import React from "react";
import "./DoubtBtn.css";
import { Link } from "react-router-dom";

function DoubtBtn(props) {
  return (
    <div className="text-center">
      <p className="mb-2 text-lightText tracking-wider">Having any doubt?</p>
      <Link to="/post-doubt">
        <button className="bg-primary text-white font-bold px-4 py-2 w-full mx-auto rounded-lg tracking-wider">
          Post a Doubt
        </button>
      </Link>
    </div>
  );
}

export default DoubtBtn;
