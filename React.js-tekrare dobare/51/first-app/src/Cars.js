import React, { Component } from "react";

class Cars extends Component {
  constructor() {
    super();
    this.state = {
      cars: ["Ferrari", "Benz", "BMW", "206"],
    };
  }

  render() {
    return (
      <div>
        <h1>My Cars:</h1>
        {this.state.cars.map((car) => (
          <p>Hi I am a car from {car} company</p>
        ))}
      </div>
    );
  }
}

export default Cars;
