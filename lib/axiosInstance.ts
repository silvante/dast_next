import axios from "axios";

const server_fatcher = axios.create({
  baseURL: "http://localhost:3000", // Your API base URL
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_ACCESS_TOKEN", // Example global header
  },
});

export default server_fatcher;
