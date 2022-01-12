import React from "react";
import "./Subject.css";

function Subject({ subjectName, imgUrl, bgcolor }) {
  return (
    <div className="subject" style={{ backgroundColor: bgcolor }}>
      <img src={imgUrl} alt={subjectName} className="subject-img" />
      <p>{subjectName}</p>
    </div>
  );
}

export default Subject;
