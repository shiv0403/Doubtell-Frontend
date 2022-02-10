import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/authActions";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

function Navbar(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const email = useSelector((state) => state.user.email);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push("/login");
  };

  return (
    <div className="bg-white flex flex-row justify-around shadow-md p-2">
      <div className="">
        <img
          src={"/assets/doubtell-logo-1.png"}
          alt={"doubtell"}
          className={"h-16 w-23"}
        />
      </div>
      <div className="items-center flex flex-row h-auto w-1/3 relative">
        <input
          type="text"
          className="w-full px-2 py-2 text-base outline-0 border-b-2"
          placeholder="Search question"
        />
        <SearchIcon className={"right-2 hover:cursor-pointer"} />
      </div>
      <>
        {email ? (
          <div className="navbar-buttons">
            <p
              style={{ color: "#fff", fontWeight: "bold" }}
              onClick={() => history.push("/profile")}
            >
              {email}
            </p>{" "}
            <Link to={"/message-page"}>
              <ChatBubbleOutlineOutlinedIcon className={"navbar-chatIcon"} />
            </Link>
            <button className={"navbar-login"} onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="flex flex-row items-center">
            <button className="mr-5 border-2 tracking-widest border-dtcolor inline-block w-full h-auto whitespace-nowrap px-4 py-0.5 rounded-full">
              <Link to={"/login"}>LOGIN</Link>
            </button>
            <button className="mr-0 border-2 tracking-widest bg-dtcolor border-dtcolor inline-block w-full h-auto whitespace-nowrap px-4 py-0.5 rounded-full">
              <span className="text-white">REGISTER</span>
            </button>
          </div>
        )}
      </>
    </div>
  );
}

export default Navbar;
