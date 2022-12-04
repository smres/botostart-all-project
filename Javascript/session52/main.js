// map
// Map
const myMap = new Map()
myMap.set("name", "milad")
myMap.set("name", "milad")
myMap.set([1,2],"number")
myMap.set("age",24)
// myMap.set("name", "milad").set([1,2],"number")
// console.log(myMap);
console.log(myMap.get("age"));
// console.log(myMap.size);
myMap.delete("age")
console.log(myMap);
// myMap.clear()
// console.log(myMap.has("age2"));