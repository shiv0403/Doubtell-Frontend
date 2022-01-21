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

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/doubt/:doubtId" component={DoubtPage} />
        <Route path="/signup" component={Signup} /> />
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
