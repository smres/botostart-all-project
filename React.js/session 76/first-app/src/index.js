import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import axios from "axios";

axios.interceptors.request.use((request) => {
  console.log(`A ${request.method} request sent to ${request.url}`);
  return request;
}, error => {
    console.log(error);
    return Promise.reject(error)
});

axios.interceptors.response.use((response) => {
  console.log(`A ${response.config.method} response sent to ${response.config.url}`);
  console.log(response.data);
  return response;
}, error => {
    console.log(error);
    return Promise.reject(error)
}); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
