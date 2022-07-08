import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../actions/authActions";
import TextField from "@mui/material/TextField";

function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    history.push("/");
  };

  return (
    <div className={"w-1/4 p-4 m-auto mt-20 shadow-lg"}>
      <h3 className="font-bold text-20 text-center mb-2">Login</h3>
      <form>
        {/* <label>Email</label>
        <br /> */}
        <div className="mt-1">
          <TextField
            required
            id="standard-email-input"
            label="Email"
            type={"email"}
            placeholder="example@mail.com"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
        </div>

        <br />
        <div className="mt-0">
          <TextField
            required
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
          />
        </div>

        <br />
      </form>
      <div className={"mt-3"}>
        <div>
          <button
            className="items-center w-full bg-primary p-1 rounded-sm text-white tracking-wider"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div className="mt-5 text-center">
          <p>
            <Link to={"/signup"}>
              <p className="cursor-pointer hover:underline">
                Don't have an account?
              </p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
