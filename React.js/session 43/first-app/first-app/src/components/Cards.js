import React, { Component } from 'react'

import styles from "./Cards.module.css";
import Card from  "./Card";

import iphonex1 from "../Images/iphone.jpg"
import iphonex2 from "../Images/2.jpg"
import iphonex3 from "../Images/3.jpg"
import iphonex4 from "../Images/4.jpg"
import iphonex5 from "../Images/5.jpg"
import iphonex6 from "../Images/6.jpg"
import iphonex7 from "../Images/7.jpg"


// const products = [
//   {
//     "images": "https://dummyjson.com/image/i/products/1/1.jpg",
//   },
//   {
//     "images": "https://dummyjson.com/image/i/products/2/1.jpg",
//   },
//   {
//     "images": "https://dummyjson.com/image/i/products/3/1.jpg",
//   },
//   {
//     "images": "https://dummyjson.com/image/i/products/5/1.jpg"
//   },
//   {
//     "images": "https://dummyjson.com/image/i/products/6/1.png",
//   },
//   {
//     "images": "https://dummyjson.com/image/i/products/7/1.jpg",
//   }
// ]


class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        
        {/* {products.map((item , index)=> (
          <Card key={index} image={item.images} name={item.category} cost={`${index} $`} />
        ))} */}
        
        <Card image={iphonex1} name="Iphone X" cost="500 $" />
        <Card image={iphonex2} name="Microsoft" cost="1600 $" />
        <Card image={iphonex3} name="Dell LapTop" cost="300 $" />
        <Card image={iphonex4} name="Natural" cost="202 $" />
        <Card image={iphonex5} name="Natural" cost="2532 $" />
        <Card image={iphonex6} name="Natural" cost="2569 $" />
        <Card image={iphonex7} name="Natural" cost="2322 $" />
      </div>
    )
  }
}

export default Cards;