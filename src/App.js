import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
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

  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="flex items-start">
      <div className="">
        <Sidebar expanded={expanded} setExpanded={setExpanded}>
          <SidebarItem
            expanded={expanded}
            active={true}
            text={"Home"}
            alert={true}
            icon={isActive ? <HomeIcon /> : <HomeOutlinedIcon />}
          />
          <SidebarItem
            expanded={expanded}
            active={false}
            text={"Post a doubt"}
            alert={false}
            icon={!isActive ? <PostAddIcon /> : <PostAddOutlinedIcon />}
          />
          <SidebarItem
            expanded={expanded}
            active={false}
            text={"Bookmarks"}
            alert={false}
            icon={!isActive ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />}
          />
          <SidebarItem
            expanded={expanded}
            active={false}
            text={"Starred"}
            alert={false}
            icon={!isActive ? <StarIcon /> : <StarBorderOutlinedIcon />}
          />
          <SidebarItem
            expanded={expanded}
            active={false}
            text={"Settings"}
            alert={false}
            icon={!isActive ? <SettingsIcon /> : <SettingsOutlinedIcon />}
          />
        </Sidebar>
      </div>
      <div className="h-screen w-full overflow-scroll mt-10">
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
    </div>
  );
}

export default App;
