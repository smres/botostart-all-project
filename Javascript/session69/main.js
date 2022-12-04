// this

const userData = {
    name: "Milad",
    age: 24,
    sayHi: function () {
        console.log(`Hi ${this.name}`);
        console.log(this);
        console.log(this.name);
    }
}

console.log(this);

userData.sayHi();