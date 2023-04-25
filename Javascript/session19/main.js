const userData = {
  name: "Milad",
  lastName: "Azami",
  age: 24,
  siblings: ["string1", "string2"],
  marks: {
    english: 12,
    math: 18,
  },
};

const userNames = {
  first: "milad",
  second: "Ali",
};

// const favorite = "age";
// console.log(userData["lastName"]);
// console.log(userData[favorite]);
// console.log(userData["siblings"]);
// console.log(userData["siblings"][0]);
// console.log(userData.siblings);
// console.log(userData.marks);
// console.log(userData.marks.english);
// console.log(userData["marks"].math);
// console.log(userData["marks"]["math"]);

// userData.career = "programmer";
// delete userData.name;
// console.log(userData);

const newObject = { ...userData, ...userNames };
console.log(newObject);
