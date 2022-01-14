import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import AnswerPage from "./Components/AnswerPage/AnswerPage";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Profile from "./Components/UserProfile/Profile";
import PostDoubt from "./Components/PostDoubt/PostDoubt";
import AnswerDoubt from "./Components/AnswerDoubt/AnswerDoubt";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/answer" element={<AnswerPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post-doubt" element={<PostDoubt />} />
        <Route path="/answer-doubt" element={<AnswerDoubt />} />
      </Routes>
    </div>
  );
}

export default App;
