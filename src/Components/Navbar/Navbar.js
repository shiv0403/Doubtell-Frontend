import React, { useState } from "react";
// import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/authActions";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import axios from "../../api/axios";

function Navbar(props) {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const [search, setSearch] = useState("");
  const [closeIcon, setCloseIcon] = useState(false);

  const email = useSelector((state) => state.user.email);

  const handleSearch = (e) => {
    if (search.length > 0) {
      //add query as parameter
      let pathname = location.pathname;
      let searchParams = new URLSearchParams(location.search);
      searchParams.set("query", search);

      pathname = "/";

      history.push({
        pathname,
        search: searchParams.toString(),
      });

      setCloseIcon(true);
    }
  };

  const handleClearQuery = () => {
    let pathname = location.pathname;
    let searchParams = new URLSearchParams(location.search);
    searchParams.delete("query");

    history.push({
      pathname: pathname,
      search: searchParams.toString(),
    });

    setSearch("");
    setCloseIcon(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push("/login");
  };

  return (
    <div className="flex justify-around items-center p-10 shadow-md">
      <div className="navbar-logo">
        <h1>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <p className="font-nexabold text-30 tracking-wider cursor-pointer">
              DoubTell
            </p>
          </Link>
        </h1>
      </div>
      <div className="flex w-1/3 items-center border-b-2">
        <input
          type="text"
          className="w-full p-1 outline-none border-0"
          placeholder="Search question"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="mr-2 cursor-pointer text-sm">
          {closeIcon && (
            <CloseIcon fontSize="medium" onClick={handleClearQuery} />
          )}
        </div>
        <SearchIcon
          className="navbar-searchIcon cursor-pointer"
          onClick={handleSearch}
        />
      </div>
      <>
        {email ? (
          <div className="flex justify-between items-center">
            {/* <div className="mr-2 cursor-pointer">
              <p
                style={{ fontWeight: "bold" }}
                onClick={() => history.push("/profile")}
              >
                <AccountCircleIcon fontSize="large" />
              </p>
            </div> */}
            <div>
              <Link to={"/message-page"}>
                <ChatBubbleOutlineOutlinedIcon
                  fontSize="medium"
                  className={"navbar-chatIcon mr-2"}
                />
              </Link>
            </div>
            <div>
              <button
                className="mr-2 ml-2 px-2 py-1 w-auto rounded-md tracking-wide bg-primary text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <button className="mr-2 ml-2 px-3 py-1.5 w-auto rounded-md tracking-wide bg-primary text-white">
                Login
              </button>
            </Link>
            <Link to={"/signup"} style={{ textDecoration: "none" }}>
              <button className="mr-2 ml-2 px-2 py-1 w-auto rounded-md tracking-wide bg-white border-2">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </>
    </div>
  );
}

export default Navbar;
