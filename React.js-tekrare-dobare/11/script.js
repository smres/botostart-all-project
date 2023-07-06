class Vehicle {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  speed(number) {
    // console.log(this);
    // console.log("I go fast");
    return number + 2;
  }
}

const car1 = new Vehicle("red", "Ferrari");
console.log(car1);
// console.log(car1.model);
console.log(car1.speed(4));

const car2 = new Vehicle("white", "BMW");
console.log(car2);
