import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import AnswerPage from "./Components/AnswerPage/AnswerPage";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/answer" element={<AnswerPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
