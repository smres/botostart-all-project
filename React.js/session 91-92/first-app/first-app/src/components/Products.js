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
        },
        () => console.log(this.state.products)
      );
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <h1>Products</h1>

        <div className={styles.container}>
          {!products.length && <h1>Loading ...</h1>}
          {/* {products.length ? products.map((product) => {<Card key={product.id} image={product.image} name={product.name} cost={`${product.price} $`}/>}) : <h1 >Loading ...</h1> } */}
          
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                image={product.image}
                name={product.name}
                cost={`${product.price} $`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Products;
