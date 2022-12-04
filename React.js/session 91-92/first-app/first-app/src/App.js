import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Burger from "./components/Burger";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import DetailsPage from "./components/DetailsPage";
import NotFound from "./components/NotFound";

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
        <Route path="/notfound" element={<NotFound/>} />
        <Route path="/*" element={<Navigate to="/notfound" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
