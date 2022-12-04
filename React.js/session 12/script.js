class Vehicle {
    constructor(color, model) {
        this.color = color,
        this.model = model
    }

    go() {
        console.log("I go");
    }
}

class Car extends Vehicle {
    constructor(color, model, speed) {
        super(color, model);
        this.speed = speed
    }

    speed() {
        console.log("I go Fast!");
    }
}

const vehicle = new Vehicle("red", "Ferrari");
console.log(vehicle);

const car = new Car("blue", "Pride", 190)
console.log(car);