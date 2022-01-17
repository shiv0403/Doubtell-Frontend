import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../actions/authActions";

function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useSelector((state) => state.user.id);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    navigate("/");
  };

  return (
    <div className={"login"}>
      <h3>LOGIN</h3>
      <form>
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
      </form>
      <div className={"login-footer"}>
        <button className={"login-submit"} onClick={handleSubmit}>
          SUBMIT
        </button>
        <p>
          <Link to={"/signup"}>Don't have an account?</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
