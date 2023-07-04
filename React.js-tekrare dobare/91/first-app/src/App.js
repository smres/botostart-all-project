import React, { Component } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/notfound" component={NotFound} />
          <Route path="/products" component={Products} />
          <Route exact path="/" component={Landing} />
          <Redirect to="/notfound" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
