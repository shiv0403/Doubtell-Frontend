import React from "react";
import { Link } from "react-router-dom";
import "./SIgnup.css";

function Signup(props) {
  return (
    <>
      <div className="signup">
        <h3>SIGNUP</h3>
        <form>
          <div className="signup-first">
            <div className="signup-name">
              <label>Full Name</label>
              <br />
              <input type="text" name="name" placeholder="John Doe" />
            </div>
            <div className="signup-age">
              <label>Age</label>
              <br />
              <input type="number" name="age" placeholder="16" />
            </div>
          </div>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder={"example@example.com"}
          />
          <br />
          <label>Password</label>
          <br />
          <input type={"password"} name={"password"} />
          <br />
          <label>Confirm Password</label>
          <br />
          <input type={"password"} name={"confirmPassword"} />
          <br />
        </form>
        <div className={"signup-footer"}>
          <button className={"signup-submit"}>SUBMIT</button>
          <p>
            <Link to={"/login"}>Already have an account?</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
