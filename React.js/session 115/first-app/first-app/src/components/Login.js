import React, { useEffect } from "react";
import useTitle from "../hooks/useTitle";

const Login = () => {
  //   useEffect(() => {
  //     document.title = "Login page";
  //   }, []);
  useTitle("Hook Login Page");
  return (
    <div>
      <h1>Login Page</h1>
    </div>
  );
};

export default Login;
