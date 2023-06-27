import React, { Component } from "react";

import { Route, Switch, Link } from "react-router-dom";

import HomePage from "./components/HomePage";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import Blogs from "./components/Blogs";

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/">Home Page</a>
          </li>
          <li>
            <a href="/blogs">Blogs</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/aboutus">About Us</a>
          </li>
        </ul>
        <div>
          <Route path="/" component={HomePage} />
          <Route path="/products" component={Products} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/aboutus" component={AboutUs} />
        </div>
      </div>
    );
  }
}

export default App;
