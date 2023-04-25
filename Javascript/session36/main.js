const userData = { name: "mamali", age: 27, carear: "Programmer" };
const keys = Object.keys(userData);
for (const i of keys) {
  // console.log(userData[i]);
}

// =======================
// foreach

const names = ["ali", "hasan", "gholi", "taghi", "mamali"];
// names.forEach(function (item, index) {
//   names[index] = item.toLocaleUpperCase();
//   console.log(names[index]);
// });

// names.forEach((item, index) => {
//   names[index] = item.toLocaleUpperCase();
//   console.log(names[index]);
// });

// ======================
// map

const newNames1 = names.map((item) => {
  return item.toUpperCase();
});
console.log(newNames1);
console.log(names);
