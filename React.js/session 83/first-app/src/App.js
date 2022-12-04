import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";
import Blogs from "./components/Blogs";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div>
          <Switch>
            <Route path="/products/:id" component={Product} />
            <Route path="/blogs/:author?" render={(props) => <Blogs name="Mamali" {...props} />} />
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
