class Vehicle {
    constructor(name,color){
        this.name = name;
        this.color = color;
    }

    move() {
        console.log("I move");
    }
}

class Car extends Vehicle {
    constructor(name, color, speed) {
        // super('Golf', 'pink');
        super(name, color);
        this.speed = speed;
    }
    
    speedGo() {
        console.log(`I go ${this.speed} km\h`);
        console.log(this);
    }
}

const car1 = new Car('benz', 'black',200);
car1.move();
car1.speedGo();
console.log(car1.name);

const car2 = new Car('BMW',"white",190);
car2.speedGo();