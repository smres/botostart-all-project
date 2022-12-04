import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";
import Blogs from "./components/Blogs";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ul>
          <li>
            <a href="/">HomePage 1</a>
          </li>
          <li>
            <a href="/blogs">Blogs 1</a>
          </li>
          <li>
            <a href="/products">Products 1</a>
          </li>
          <li>
            <a href="/aboutus">AboutUs 1</a>
          </li>
        </ul>
        <div>
          <Switch>
            <Route path="/blogs" component={Blogs} />
            <Route path="/products" component={Products} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
