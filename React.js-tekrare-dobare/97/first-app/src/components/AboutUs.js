import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Programmers from "./Programmers";

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <ul>
        <li>
          <Link to="programmers">Programmers</Link>
        </li>
        <li>
          <Link to="drivers">Drivers</Link>
        </li>
      </ul>

      <div>
        <Routes>
          <Route path="programmers" element={<Programmers />} />
          <Route path="drivers" element={<h1>Drivers</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default AboutUs;
