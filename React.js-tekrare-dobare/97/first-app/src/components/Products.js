import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";

import styles from "./Products.module.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      this.setState(
        {
          products: response.data,
          isLoading: false,
        },
        () => console.log(this.state.products)
      );
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div className={styles.container}>
        {products.length ? (
          products.map((product) => {
            return (
              <Card
                key={product.id}
                name={product.title}
                image={product.image}
                cost={`${String(product.price)}`}
                id={product.id}
              />
            );
          })
        ) : (
          <h1>Loading ...</h1>
        )}
      </div>
    );
  }
}

export default Products;
