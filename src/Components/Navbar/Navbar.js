import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>DoubTell</h1>
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
        <button className="navbar-login">Login</button>
        <button className="navbar-signup">Signup</button>
      </div>
    </div>
  );
}

export default Navbar;
