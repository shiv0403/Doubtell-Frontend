import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./SIgnup.css";
import { signup } from "../../actions/authActions";

function Signup(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const id = useSelector((state) => state.user.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ name, age, email, password, confirmPassword }));
    navigate("/");
  };

  return (
    <>
      <div className="signup">
        <h3>SIGNUP</h3>
        <form>
          <div className="signup-first">
            <div className="signup-name">
              <label>Full Name</label>
              <br />
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="signup-age">
              <label>Age</label>
              <br />
              <input
                type="number"
                name="age"
                placeholder="16"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder={"example@example.com"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type={"password"}
            name={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <label>Confirm Password</label>
          <br />
          <input
            type={"password"}
            name={"confirmPassword"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
        </form>
        <div className={"signup-footer"}>
          <button className={"signup-submit"} onClick={handleSubmit}>
            SUBMIT
          </button>
          <p>
            <Link to={"/login"}>Already have an account?</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
