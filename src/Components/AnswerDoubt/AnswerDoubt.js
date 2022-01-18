import React, { useRef, useState } from "react";
import "./AnswerDoubt.css";
import { Editor } from "@tinymce/tinymce-react";
import Button from "@mui/material/Button";
import axios from "../../api/axios";

function AnswerDoubt(props) {
  // const handleSubmit = () => {
  //   const content = editorRef.current.getContent();
  //   try {
  //     axios.post("/api/doubt/submit", { content }).then((res) => {
  //       if (res.status === 201) {
  //         console.log("Doubt submitted!");
  //       }
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className={"ansDoubt"}>
      <div className="ansDoubt-doubt">
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
          veritatis?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quisquam, tempore?
        </h3>
      </div>
      <div className="ansDoubt-editor"></div>
    </div>
  );
}

export default AnswerDoubt;
