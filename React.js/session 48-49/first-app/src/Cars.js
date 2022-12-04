import React, { Component } from "react";

import {v4 as uuidIsGeneratoreId} from "uuid";

class Cars extends Component {
  constructor() {
    super();
    this.state = {
      cars: [
        { id: 1, name: "Ferrari" },
        { id: 2, name: "Benz" },
        { id: 3, name: "BMW" },
        { id: 4, name: "206" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>My Cars:</h1>
        {this.state.cars.map((car) => (
          <p key={car.id}>
            Hi, I am a car from{" "}
            <span
              style={{
                color: "red",
                backgroundColor: "lightgreen",
                padding: "3px",
                borderRadius: "5px",
              }}
            >
              {car.name}
            </span>{" "}
            company - {uuidIsGeneratoreId()}
          </p>
        ))}
      </div>
    );
  }
}

export default Cars;
