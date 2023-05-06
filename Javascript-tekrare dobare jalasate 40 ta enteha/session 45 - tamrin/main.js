const userData = [
  { name: "Milad", age: 24 },
  { name: "Mamad", age: 22 },
  { name: "David", age: 20 },
  { name: "Thomas", age: 18 },
];

const container = document.querySelector(".container");

const ulElement = document.createElement("ul");
const liElement = document.createElement("li");

ulElement.style.listStyle = "none";

// for (const i of userData) {
//   //   container.innerHTML += `<ul>
//   //          <li>${i.name}'s age is ${i.age}</li>
//   //       </ul>`;
// }

userData.forEach((item) => {
  const liElement = document.createElement("li");
  liElement.innerText = `${item.name}'s age is ${item.age}`;
  console.log(liElement);
  ulElement.appendChild(liElement);
});

container.appendChild(ulElement);
