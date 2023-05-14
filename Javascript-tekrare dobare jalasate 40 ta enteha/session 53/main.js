// Set
const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const mySet = new Set(array);

// mySet.add("mamali").add("ali").add("Thomas").add("David");
// mySet.delete("ali");
// mySet.clear();

mySet.forEach(item => {
    console.log(item);
})

// console.log(mySet.has("mamali"));
// console.log(mySet.size);
console.log(mySet);
