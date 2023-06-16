import React, { Component } from "react";

import { v4 } from "uuid";

class Cars extends Component {
  constructor() {
    super();
    this.state = {
      cars: [
        { name: "Ferrari", id: 1 },
        { name: "Benz", id: 2 },
        { name: "BMW", id: 3 },
        { name: "206", id: 4 },
        { name: "Benz", id: 5 },
      ],
    };
  }

  render() {
    let sss;
    return (
      <div>
        <h1>My Cars:</h1>
        {
          (sss = this.state.cars.map((car, index) => {
            return (
              <div key={v4()}>
                <p>
                  Hi I am a car from {car.name} company - {v4()}
                </p>
                <p>{index}</p>
              </div>
            );
          }))
        }
        {console.log(sss)}
      </div>
    );
  }
}

export default Cars;
