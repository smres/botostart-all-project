import React, { Component } from 'react'

import styles from "./Cards.module.css";
import Card from  "./Card";

import {v4} from "uuid";

import iphonex1 from "../Images/iphone.jpg"
import iphonex2 from "../Images/2.jpg"
import iphonex3 from "../Images/3.jpg"
import iphonex4 from "../Images/4.jpg"
import iphonex5 from "../Images/5.jpg"
import iphonex6 from "../Images/6.jpg"
import iphonex7 from "../Images/7.jpg"


class Cards extends Component {
  constructor() {
    super();
    this.state = {
      phoneData : [
        {id:1, image: iphonex1, name:"Iphone X", cost:"500 $"},
        {id:2, image: iphonex2, name:"Microsoft", cost:"1600 $"},
        {id:3, image: iphonex3, name:"Dell LapTop", cost:"300 $"},
        {id:4, image: iphonex4, name:"Natural", cost:"202 $"},
        {id:5, image: iphonex5, name:"Natural3", cost:"2532 $"},
        {id:6, image: iphonex6, name:"Natural2", cost:"2569 $"},
        {id:7, image: iphonex7, name:"Natural4", cost:"2322 $"},
      ]
    }
  }

  render() {
    return (
      <div className={styles.container}>
        {/* <Card image={iphonex1} name="Iphone X" cost="500 $" />
        <Card image={iphonex2} name="Microsoft" cost="1600 $" />
        <Card image={iphonex3} name="Dell LapTop" cost="300 $" />
        <Card image={iphonex4} name="Natural" cost="202 $" />
        <Card image={iphonex5} name="Natural3" cost="2532 $" />
        <Card image={iphonex6} name="Natural2" cost="2569 $" />
        <Card image={iphonex7} name="Natural4" cost="2322 $" /> */}

        {this.state.phoneData.map(phone => {
         return <Card key={v4()} image={phone.image} name={phone.name} cost={phone.cost} />
        })}
      </div>
    )
  }
}

export default Cards;