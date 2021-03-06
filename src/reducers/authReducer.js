import {
  SIGNUP_LOGIN_FAILURE,
  AUTH_LOADING,
  SIGNUP_LOGIN_SUCCESS,
  USER_LOADED,
  LOGOUT_SUCCESS,
} from "../actions/authActionTypes";

import jwtDecode from "jwt-decode";

const initialState = {
  loading: false,
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  id: "",
  imgUrl: "",
  err: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOADED:
    case SIGNUP_LOGIN_SUCCESS:
      const user = jwtDecode(action.payload);
      console.log("user-->", user);
      return {
        ...state,
        loading: false,
        name: user.name,
        email: user.email,
        id: user.id,
        token: action.payload,
        imgUrl: user.imgUrl,
        error: {},
      };
    case SIGNUP_LOGIN_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        loading: false,
        token: null,
        name: null,
        email: null,
        id: null,
        imgUrl: null,
      };
    default:
      return state;
  }
};

export default authReducer;
