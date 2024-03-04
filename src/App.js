import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import DoubtPage from "./Components/AnswerPage/DoubtPage";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Profile from "./Components/UserProfile/Profile";
import PostDoubt from "./Components/PostDoubt/PostDoubt";
import AnswerDoubt from "./Components/AnswerDoubt/AnswerDoubt";
import { loadUser } from "./actions/authActions";
import MessagePage from "./Components/MessagePage/MessagePage";
import Sidebar from "./Components/Sidebar/Sidebar";
import SidebarItem from "./Components/Sidebar/SidebarItem";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PostAddIcon from "@mui/icons-material/PostAdd";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function App() {
  const isActive = true;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="app">
      {/* <Navbar /> */}
      <Sidebar>
        <SidebarItem
          active={true}
          text={"Home"}
          alert={true}
          icon={isActive ? <HomeIcon /> : <HomeOutlinedIcon />}
        />
        <SidebarItem
          active={false}
          text={"Post a doubt"}
          alert={false}
          icon={!isActive ? <PostAddIcon /> : <PostAddOutlinedIcon />}
        />
        <SidebarItem
          active={false}
          text={"Bookmarks"}
          alert={false}
          icon={!isActive ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />}
        />
        <SidebarItem
          active={false}
          text={"Starred"}
          alert={false}
          icon={!isActive ? <StarIcon /> : <StarBorderOutlinedIcon />}
        />
        <SidebarItem
          active={false}
          text={"Settings"}
          alert={false}
          icon={!isActive ? <SettingsIcon /> : <SettingsOutlinedIcon />}
        />
      </Sidebar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/doubt/:doubtId" component={DoubtPage} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/post-doubt" component={PostDoubt} />
        <Route path="/answer-doubt" component={AnswerDoubt} />
        <Route path="/message-page" component={MessagePage} />
      </Switch>
    </div>
  );
}

export default App;
