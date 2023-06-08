class Vehicle {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  go() {
    console.log("I go");
  }
}

class Car extends Vehicle {
  constructor(color, model, speed) {
    super(color, model);
    this.speed = speed;
  }
  speed() {
    console.log("I go fast!");
  }
}

const Vehicle1 = new Vehicle("red", "Ferrari");
console.log(Vehicle1);
Vehicle1.go();

const car = new Car("green", "iran-khodro", 190);
console.log(car.speed);
