import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./PostDoubt.css";
import { Editor } from "@tinymce/tinymce-react";
import Axios from "../../api/axios";

import { Button } from "@mui/material";

const api_key = "miwj31pnzo4xtmtcglfy7grcgi74ha8xh8jqyrfhcc72a2xy";

function PostDoubt(props) {
  const editorRef = useRef(null);
  const history = useHistory();

  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");

  const userId = useSelector((state) => state.user.id);
  const userName = useSelector((state) => state.user.name);

  const handleSubmit = async () => {
    const content = editorRef.current.getContent();
    const formData = new FormData();

    for (const key of Object.keys(img)) {
      formData.append("img", img[key]);
    }

    try {
      await Axios.post("/api/upload-img/doubt-img/images", formData).then(
        async (res) => {
          const filenames = res.data;

          await Axios.post("/api/doubt/submit", {
            content,
            userId,
            category,
            filenames,
            userName,
          }).then((resFinal) => {
            history.push("/");
          });
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={"postDoubt"}>
      <h1 className={"text-5xl text-coolGray text-center mt-12"}>
        Write your Doubt...
      </h1>
      <div className={"postDoubt-question"}>
        <Editor
          apiKey={api_key}
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue=""
          init={{
            height: 400,
            menubar: true,
            selector: "textarea",
            fontsize_formats: "8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt",
            image_title: true,
            automatic_uploads: true,
            plugins: [
              "advlist autolink lists link  charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime  table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | code " +
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

      <div className="flex justify-between items-center w-1/2 mx-auto">
        <div className="flex items-center">
          <p className="mr-2 font-nexa text-secondary">
            {"Select category".toUpperCase()}
          </p>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Maths</option>
          </select>
        </div>
        <div>
          <button
            className="border-2 mt-2 px-2 py-1 text-center tracking-widest rounded-sm w-full hover:bg-primary hover:text-white hover:font-bold"
            onClick={handleSubmit}
          >
            Post doubt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostDoubt;
