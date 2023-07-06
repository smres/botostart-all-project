import React, { Component } from "react";

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import AboutUs from "./components/AboutUs";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
