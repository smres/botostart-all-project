import React, { useEffect } from "react";
import useTitle from "../hooks/useTitle";

const Landing = () => {
  //   useEffect(() => {
  //     document.title = "Landing page";
  //   }, []);
  useTitle("Hook Landing Page");
  return (
    <div>
      <h1>Landing Page</h1>
    </div>
  );
};

export default Landing;
