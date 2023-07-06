import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Authorization"] = "Bearer Token";

axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response.data);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
