import axios from "axios";

const dev_url = "http://localhost:8080";
const prod_url = "https://doubtell-backend.herokuapp.com/";

export default axios.create({
  baseURL: dev_url,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
