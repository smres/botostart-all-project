import React from "react";
import { Route, Switch } from "react-router-dom";
import Burger from "./components/Burger";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Burger />
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/" component={Landing} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
