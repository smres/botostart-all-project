import React, { Component } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./components/HomePage";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route
              path="/products/:id"
              render={(props) => <Product {...props} />}
            />
            <Route
              path="/blogs/:author?"
              render={(props) => <Blogs name="mamali" {...props} />}
            />
            <Redirect from="/articles" to="/blogs" />
            <Route path="/products" component={Products} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/notfound" component={NotFound} />
            <Route exact path="/" component={HomePage} />
            <Redirect to="/notfound" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
