import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/products", { replace: true });
  };
  return (
    <div>
      <h1>About Us</h1>
      <button onClick={clickHandler}>Go Product</button>
    </div>
  );
};

export default AboutUs;
