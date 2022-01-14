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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function AnswerDoubt(props) {
  const editorRef = useRef(null);
  const [img, setImg] = useState("");
  const [url, setUrl] = useState("");
  const [open, setOpen] = React.useState(false);
  const [doneCopy, setDoneCopy] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setImg("");
    setUrl("");
  };

  const handleUploadImg = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img);
    try {
      axios.post("/api/upload-img/doubt-img", formData).then((response) => {
        const data = response.data;
        setUrl(data.url);
      });
    } catch (err) {
      console.log(err);
    }
  };

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

  function handleCopyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setDoneCopy(true);
    });
  }

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
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 400,
            menubar: true,
            selector: "input",
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
          }}
        />
      </div>
      <div className="ansDoubt-buttons">
        <Button onClick={handleOpen}>Add an Image</Button>
        <Button onClick={handleSubmit}>Submit Doubt</Button>
      </div>

      <div className="postDoubt-uploadImg">
        {open && (
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                {url && (
                  <div className="ansDoubt-imgLink">
                    <p>{url}</p>
                    {doneCopy ? (
                      <DoneIcon />
                    ) : (
                      <ContentCopyIcon
                        style={{ fontSize: "1.2rem" }}
                        onClick={handleCopyLink}
                      />
                    )}
                  </div>
                )}
                <form onSubmit={handleUploadImg} className={"ansDoubt-form"}>
                  <input
                    type={"file"}
                    name={"local-image"}
                    className={"ansDoubt-inputImg"}
                    onChange={(e) => setImg(e.target.files[0])}
                  />
                  <button>Upload</button>
                </form>
              </Box>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
}

export default AnswerDoubt;
