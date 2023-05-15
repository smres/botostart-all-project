// this

const name = "ali";
const userData = {
  name: "mamali",
  age: 24,
  sayHi: function () {
    console.log(`Hi ${this.name}`);
    console.log(this);
  },
};

console.log(this);

userData.sayHi();
