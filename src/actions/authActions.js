import axios from "../api/axios.";
import {
  SIGNUP_LOGIN_FAILURE,
  AUTH_LOADING,
  SIGNUP_LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./authActionTypes";
import { Navigate } from "react-router-dom";

const authLoading = () => {
  return {
    type: AUTH_LOADING,
  };
};

const signupLoginSuccess = (user) => {
  return {
    type: SIGNUP_LOGIN_SUCCESS,
    payload: user,
  };
};

const signupLoginFailed = (err) => {
  return {
    type: SIGNUP_LOGIN_FAILURE,
    payload: err,
  };
};

const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const signup = (data) => {
  return async (dispatch) => {
    dispatch(authLoading());
    try {
      await axios.post("/api/auth/signup", { data }).then((res) => {
        const token = res.data;
        localStorage.setItem("token", token);
        dispatch(signupLoginSuccess(token));
      });
    } catch (err) {
      dispatch(signupLoginFailed(err));
    }
  };
};

export const login = (data) => {
  return async (dispatch) => {
    dispatch(authLoading());
    try {
      await axios.post("/api/auth/login", { data }).then((res) => {
        const token = res.data;
        localStorage.setItem("token", token);
        dispatch(signupLoginSuccess(token));
      });
    } catch (err) {
      dispatch(signupLoginFailed(err));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    await axios.get("/api/auth/logout").then((res) => {
      dispatch(logoutSuccess());
      const data = res.data;
      console.log(data.msg);
    });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().user.token;
    if (token) {
      dispatch({
        type: "USER_LOADED",
        payload: token,
      });
    } else {
      return null;
    }
  };
};
