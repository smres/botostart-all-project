// Symbol
const age = Symbol("age");
const name = Symbol("name");

const userData = {
  nsme: "Milad",
  career: "Programmer",
  [age]: 24,
};
console.log(age);
console.log(name);

console.log(Object.keys(userData))