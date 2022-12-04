import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Burger from "./components/Burger";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import DetailsPage from "./components/DetailsPage";

const App = () => {
  return (
    <div>
      <Burger />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/products/us" element={<AboutUs />} />
        <Route path="/landing" element={<Navigate to="/products/5" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
