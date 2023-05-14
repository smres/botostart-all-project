// Map
// const data = {
//   { a: 1 }: "Mamali"
// }

const myMap = new Map();
const keyO = { a: 1 };
myMap.set(keyO, "mamali");
myMap.set([1, 2], "numbers");
myMap.set("age", 24);

// console.log(myMap.get("age"));
// console.log(myMap.size);
// myMap.delete("age");
// myMap.clear();
console.log(myMap.has("age"));
console.log(myMap.get(keyO));
console.log(myMap);
