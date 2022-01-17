import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/authActions";

function Navbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useSelector((state) => state.user.email);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
  };

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
      <>
        {email ? (
          <div className="navbar-buttons">
            <p style={{ color: "#fff", fontWeight: "bold" }}>{email}</p>{" "}
            <button className={"navbar-login"} onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-buttons">
            <button className="navbar-login">
              <Link
                to={"/login"}
                style={{ textDecoration: "none", color: "#000" }}
              >
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
        )}
      </>
    </div>
  );
}

export default Navbar;
