const userData = [
  { name: "milad", age: 24 },
  { name: "Mamad", age: 22 },
  { name: "David", age: 20 },
  { name: "Thomas", age: 18 },
  { name: "Mamad", age: 22 },
  { name: "David", age: 20 },
  { name: "Thomas", age: 18 },
  { name: "Mamad", age: 22 },
  { name: "David", age: 20 },
  { name: "Thomas", age: 18 },
  { name: "Mamad", age: 22 },
  { name: "David", age: 20 },
  { name: "Thomas", age: 18 },
];

const ul = document.createElement("ul");
ul.style.listStyle = "none";
userData.forEach((item) => {
  const li = document.createElement("li");
  li.innerText = `${item.name}'s age is ${item.age}`;
  ul.appendChild(li);
});
const container = document.querySelector(".container");
container.appendChild(ul);

// ================================================

// const newUserData = userData.map((item) => {
//   const ul = document.createElement("ul");
//   const li = document.createElement("li");
//   const container = document.querySelector(".container");
//   li.innerText = `${item.name}'s age is ${item.age}`;
//   ul.append(li);
//   container.appendChild(ul);
//   return item;
// });
