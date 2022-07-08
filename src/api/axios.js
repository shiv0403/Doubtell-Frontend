import axios from "axios";

export default axios.create({
  baseURL: "https://doubtell-backend.herokuapp.com/",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
