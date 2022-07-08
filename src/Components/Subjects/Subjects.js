import React from "react";
import "./Subjects.css";
import Subject from "./Subject/Subject";
import { useHistory, useLocation } from "react-router-dom";

function Subjects(props) {
  const location = useLocation();
  const history = useHistory();

  const handleClearCategory = () => {
    let pathname = location.pathname;
    let searchParams = new URLSearchParams(location.search);
    searchParams.delete("category");
    history.push({
      pathname: pathname,
      search: searchParams.toString(),
    });
  };

  return (
    <div>
      <div className="">
        <Subject
          subjectName="PHYSICS"
          imgUrl="/assets/physics.jpg"
          bgcolor="#17c5cc"
        />
        <Subject
          subjectName="CHEMISTRY"
          imgUrl="/assets/chemistry.jpg"
          bgcolor="#481759"
        />
        <Subject
          subjectName="MATHS"
          imgUrl="/assets/maths.jpg"
          bgcolor="#e86e00"
        />
      </div>
      <div>
        <button
          onClick={handleClearCategory}
          className="border-2 mt-2 px-2 py-1 text-center rounded-md w-full hover:bg-primary hover:text-white hover:font-bold"
        >
          Clear category
        </button>
      </div>
    </div>
  );
}

export default Subjects;
