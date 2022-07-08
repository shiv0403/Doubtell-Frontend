import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./Subject.css";

function Subject({ subjectName, imgUrl, bgcolor }) {
  const location = useLocation();
  const history = useHistory();

  function toPascalCase(str) {
    return (" " + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
      return chr.toUpperCase();
    });
  }

  const handleFilter = () => {
    let category = toPascalCase(subjectName);
    let pathname = location.pathname;
    let searchParams = new URLSearchParams(location.search);
    searchParams.set("category", category);

    history.push({
      pathname,
      search: searchParams.toString(),
    });
  };

  return (
    <div
      className="subject"
      style={{ backgroundColor: bgcolor }}
      onClick={handleFilter}
    >
      <img src={imgUrl} alt={subjectName} className="subject-img" />
      <p>{subjectName}</p>
    </div>
  );
}

export default Subject;
