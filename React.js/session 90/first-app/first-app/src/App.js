import React from "react";
import { Route, Routes } from "react-router-dom";
import Burger from "./components/Burger";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <div>
      <Burger />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
