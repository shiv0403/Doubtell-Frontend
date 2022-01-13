import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import AnswerPage from "./Components/AnswerPage/AnswerPage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/answer" element={<AnswerPage />} />
      </Routes>
    </div>
  );
}

export default App;
