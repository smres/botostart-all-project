import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Store from "./components/Store";

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <ProductContextProvider>
      <Switch>
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products" component={Store} />
        <Redirect to="/products" />
      </Switch>
    </ProductContextProvider>
  );
}

export default App;
