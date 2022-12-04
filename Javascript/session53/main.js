// Set
const array = [1,1,1,2,2,2,3,3,3,4,4,4,5]
const mySet = new Set(array);
mySet.add("Milad");
mySet.add("Ali");
mySet.add("Thomas");
mySet.add("David");
// mySet.delete("Ali");
// mySet.clear();
// console.log(mySet.has("Milad"));

mySet.forEach(item => console.log(item))

console.log(mySet);
