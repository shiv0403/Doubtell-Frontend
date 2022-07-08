import React, { useState, useEffect } from "react";
import "./Profile.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Trending from "../Trending/Trending";
import FeedBlock from "../Feed/Feed-Block/FeedBlock";
import { useSelector } from "react-redux";
import axios from "../../api/axios";

function Profile(props) {
  const userId = useSelector((state) => state.user.id);

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getInfo() {
      await axios
        .get(`/api/user/get-user/${userId}`)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    }

    getInfo();
  }, []);

  return (
    <>
      <div className={"profile"}>
        <div className="profile-header">
          <div className="profile-personDetails">
            <div className="profile-pic">
              <img
                src={"/assets/physics.jpg"}
                alt={"user-pic"}
                className={"profile-picImg"}
              />
            </div>
            <div className="profile-details">
              <p style={{ fontWeight: "bold", fontSize: "19px" }}>User Name</p>
              <p
                style={{ display: "flex", alignItems: "center", color: "gray" }}
              >
                <span>user bio</span>{" "}
                <LocationOnIcon style={{ fontSize: "1rem" }} />{" "}
                <span>location</span>
              </p>
              <p>
                <span>10 followers</span> . <span>20 following</span>
              </p>
            </div>
          </div>
          <div className="profile-follow">
            <button className={"profile-followBtn"}>Follow</button>
          </div>
        </div>
        <div className="profile-main">
          <ul className={"profile-tabs"}>
            <li>Answers</li>
            <li>Doubts</li>
            <li>Video Sessions</li>
          </ul>
          <div className="profile-feedBlocks">
            <FeedBlock />
            <FeedBlock />
            <FeedBlock />
            <FeedBlock />
            <FeedBlock />
          </div>
        </div>
      </div>
      <div className={"profile-trending"}>
        <Trending />
      </div>
    </>
  );
}

export default Profile;
