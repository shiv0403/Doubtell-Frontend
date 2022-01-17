import React, { useRef, useState } from "react";
import "./AnswerDoubt.css";
import { Editor } from "@tinymce/tinymce-react";
import Button from "@mui/material/Button";
import axios from "../../api/axios.";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";

const api_key = "miwj31pnzo4xtmtcglfy7grcgi74ha8xh8jqyrfhcc72a2xy";

function AnswerDoubt(props) {
  const editorRef = useRef(null);

  const handleSubmit = () => {
    const content = editorRef.current.getContent();
    try {
      axios.post("/api/doubt/submit", { content }).then((res) => {
        if (res.status === 201) {
          console.log("Doubt submitted!");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={"ansDoubt"}>
      <div className="ansDoubt-doubt">
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
          veritatis?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quisquam, tempore?
        </h3>
      </div>
      <div className="ansDoubt-editor">
        <Editor
          apiKey={api_key}
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue=""
          init={{
            height: 400,
            menubar: true,
            selector: "textarea",
            image_title: true,
            automatic_uploads: true,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | image code " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            file_picker_types: "image",
            file_picker_callback: function (cb, value, meta) {
              var input = document.createElement("input");
              input.setAttribute("type", "file");
              input.setAttribute("accept", "image/*");

              input.onchange = function () {
                var file = this.files[0];

                var reader = new FileReader();
                reader.onload = function () {
                  var id = "blobid" + new Date().getTime();
                  var blobCache =
                    window.tinymce.activeEditor.editorUpload.blobCache;
                  var base64 = reader.result.split(",")[1];
                  var blobInfo = blobCache.create(id, file, base64);
                  blobCache.add(blobInfo);

                  /* call the callback and populate the Title field with the file name */
                  cb(blobInfo.blobUri(), { title: file.name });
                };
                reader.readAsDataURL(file);
              };

              input.click();
            },
          }}
        />
      </div>
      <div className="ansDoubt-buttons">
        <Button onClick={handleSubmit}>Submit Doubt</Button>
      </div>
    </div>
  );
}

export default AnswerDoubt;
