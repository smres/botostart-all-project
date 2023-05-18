class Vehicle {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  move() {
    console.log("I move");
  }
}

class Car extends Vehicle {
  constructor(name, color, speed) {
    super(name, color);
    this.speed = speed;
  }

  speedGo() {
    console.log(`I go ${this.speed} km/h`);
    console.log(this);
  }
}

const car1 = new Car("benz", "black", 200);
car1.speedGo();

const car2 = new Car("BMW", "Red",190);
car2.speedGo();
