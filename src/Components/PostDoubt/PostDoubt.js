import React, { useRef, useState } from "react";
import "./PostDoubt.css";
import { Editor } from "@tinymce/tinymce-react";
import axios from "../../api/axios.";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const api_key = "miwj31pnzo4xtmtcglfy7grcgi74ha8xh8jqyrfhcc72a2xy";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function PostDoubt(props) {
  const editorRef = useRef(null);
  const [img, setImg] = useState("");
  const [url, setUrl] = useState("");
  const [open, setOpen] = React.useState(false);
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

  return (
    <div className={"postDoubt"}>
      <Editor
        apiKey={api_key}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          width: "70%",
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
      <div className="postDoubt-uploadImg">
        <p>Upload image to Doubt</p>
        {open && (
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                {url && <p>{url}</p>}
                <form onSubmit={handleUploadImg}>
                  <input
                    type={"file"}
                    name={"local-image"}
                    onChange={(e) => setImg(e.target.files[0])}
                  />
                  <button>upload</button>
                </form>
              </Box>
            </Modal>
          </div>
        )}
        <Button onClick={handleOpen}>Add an Image</Button>
      </div>
    </div>
  );
}

export default PostDoubt;
