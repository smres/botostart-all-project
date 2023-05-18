// const axios = require("axios");
// axios.delete("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
//   console.log(res.data);
// });
// ========================================
var unique = require("uniq");

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));

const { faker } = require("@faker-js/faker");
// or, if desiring a different locale
// const { fakerDE: faker } = require('@faker-js/faker');

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

console.log(randomEmail);
console.log(randomName);
