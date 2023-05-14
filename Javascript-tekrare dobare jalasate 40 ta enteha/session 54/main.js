// Symbol
const age = Symbol("age");
// const name = Symbol("name");

const userData = {
  name: "Mamali",
  career: "programmer",
  [age]: 24,
};

// console.log(age);
// console.log(name);

console.log(Object.keys(userData));
console.log(userData);
