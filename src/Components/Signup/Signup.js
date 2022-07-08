import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./SIgnup.css";
import { signup } from "../../actions/authActions";
import { TextField } from "@mui/material";

function Signup(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const id = useSelector((state) => state.user.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ name, age, email, password, confirmPassword }));
    history.push("/");
  };

  return (
    <>
      <div className="w-1/4 p-4 m-auto mt-20 shadow-lg">
        <h3 className="font-bold text-20 text-center mb-2">Signup</h3>
        <form>
          <div className="flex justify-between mt-5">
            <div className="">
              {/* <label>Full Name</label>
              <br /> */}
              <TextField
                required
                id="standard-required"
                label="Full name"
                defaultValue=""
                type={"text"}
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="ml-10">
              <TextField
                id="standard-number"
                label="Age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                variant="standard"
              />
            </div>
          </div>

          <div className="mt-5">
            <TextField
              required
              id="standard-required"
              label="Email"
              defaultValue=""
              type={"text"}
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="mt-5">
            <TextField
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

          <div className="mt-5">
            <TextField
              id="standard-password-input"
              label="Confirm password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full"
            />
          </div>
        </form>
        <div className={"mt-5"}>
          <div>
            <button
              className="items-center w-full bg-primary p-1 rounded-sm text-white tracking-wider"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>

          <div className="mt-5 text-center">
            <Link to={"/login"}>
              <p className="cursor-pointer hover:underline">
                Already have an account?
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
