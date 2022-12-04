class Vehicle {
    constructor(color, model) {
        this.color = color,
        this.model = model
    }

    speed() {
        console.log(this.color);
        console.log(this);
        console.log("I go fast");
    }
}

const car1 = new Vehicle("red", "Ferrari");
// console.log(car1.speed());
console.log(car1);
car1.speed();

const car2 = new Vehicle("white", "BMW")
console.log(car2);