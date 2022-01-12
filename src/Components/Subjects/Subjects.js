import React from "react";
import "./Subjects.css";
import Subject from "./Subject/Subject";

function Subjects(props) {
  return (
    <div className="subjects">
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
        subjectName="MATHEMATICS"
        imgUrl="/assets/maths.jpg"
        bgcolor="#e86e00"
      />
    </div>
  );
}

export default Subjects;
