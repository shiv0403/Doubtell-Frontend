import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <div className={"login"}>
      <h3>LOGIN</h3>
      <form>
        <label>Email</label>
        <br />
        <input type="email" name="email" placeholder={"example@example.com"} />
        <br />
        <label>Password</label>
        <br />
        <input type={"password"} name={"password"} />
        <br />
      </form>
      <div className={"login-footer"}>
        <button className={"login-submit"}>SUBMIT</button>
        <p>
          <Link to={"/signup"}>Don't have an account?</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
