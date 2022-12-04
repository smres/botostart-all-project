class Car {
    constructor(name,color,speed) {
        this.name = name;
        this.color = color;
        this.speed = speed;
    }
    
    speedGo() {
        console.log(`I go ${this.speed} km\h`);
        console.log(this);
    }
}

const car1 = new Car("benz","black",200);
console.log(car1.name);
car1.speedGo();

const car2 = new Car("BMW","white",190);
car2.speedGo();
console.log(car2.name);