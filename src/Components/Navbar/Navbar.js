import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>
          <Link to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
            DoubTell
          </Link>
        </h1>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          className="navbar-searchInput"
          placeholder="Search question"
        />
        <SearchIcon className="navbar-searchIcon" />
      </div>
      <div className="navbar-buttons">
        <button className="navbar-login">
          <Link to={"/login"} style={{ textDecoration: "none", color: "#000" }}>
            Login
          </Link>
        </button>
        <button className="navbar-signup">
          <Link
            to={"/signup"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Sign Up
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
