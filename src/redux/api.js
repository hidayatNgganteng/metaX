import axios from "axios";

export default axios.create({
  baseURL: "https://avl-frontend-exam.herokuapp.com/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
