import React, { useEffect, useState } from "react";
import "./FeedBlock.css";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "../../../api/axios";

function FeedBlock({ doubt }) {
  const [author, setAuthor] = useState("");
  const [doubtContent, setDoubtContent] = useState("");

  useEffect(() => {
    async function getAuthor() {
      try {
        await axios.get(`api/user/get-user/${doubt.author_id}`).then((res) => {
          const user = res.data;
          setAuthor(user);
        });
      } catch (err) {
        console.log(err);
      }
    }
    getAuthor();
    // const parsedContent = doubt.doubt.replace(/<[^>]+>/g, "");
    // setDoubtContent(parsedContent);
    const doubtHeadingEl = document.getElementById("feedBlock-doubtHeading");
    doubtHeadingEl.innerHTML = doubt.doubt;
  }, []);

  return (
    <div className="feedBlock">
      <div className="feedBlock-header">
        <div className="feedBlock-author">
          <Avatar />
          <p
            style={{
              marginLeft: "10px",
              fontWeight: "700",
              fontSize: "14px",
              letterSpacing: "0.5px",
            }}
          >
            {author.name}
          </p>
        </div>
        <div className="feedBlock-more">
          <MoreHorizIcon />
        </div>
      </div>
      <div className="feedBlock-main">
        <div className="feedBlock-question">
          <Link
            to={"/answer"}
            className={"feedBlock-navigateLink"}
            state={{ doubt, author, doubtContent }}
          >
            <h3 id={"feedBlock-doubtHeading"}>
              {/*{doubtContent}*/}
              {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
              {/*Consectetur, tempore. Lorem ipsum dolor sit amet, consectetur*/}
              {/*adipisicing elit. Saepe, vel.*/}
            </h3>
          </Link>
        </div>
        <div className="feedBlock-answer">
          {/*todo-answer*/}
          <p>
            {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad*/}
            {/*architecto corporis culpa ducimus impedit quia, quo reprehenderit*/}
            {/*saepe suscipit temporibus. Blanditiis iusto laudantium maxime*/}
            {/*numquam vel? Distinctio neque totam unde.*/}
          </p>
        </div>
      </div>
      <div className="feedBlock-footer">
        <div className="feedBlock-footer-first">
          <SendIcon />
          <ShareIcon />
        </div>
        <div className="feedBlock-footer-second">
          <BookmarkBorderIcon />
        </div>
      </div>
    </div>
  );
}

export default FeedBlock;
