// synchronous vs asynchronous
// single thread
// console.log(1);
// console.log(2);
// for (let i = 0; i < 1000; i++) {
//   console.log(i);
// }
// console.log(3);
// ==============================================
// callback
// callback Hell
// console.log("start");
// function getUserData(callback) {
//   setTimeout(() => {
//     console.log("دیتا الان ریترن شده");
//     callback({ name: "Mohammad", email: "mamali@gmail.com" });
//   }, 3000);
// }

// function getUserAge(name, callback) {
//   setTimeout(() => {
//     console.log(name);
//     callback({ age: 24 });
//   }, 2000);
// }

// const data = getUserData((data) => {
//   console.log(data);
//   const age = getUserAge(data.name, age=> {
//     console.log(age);
//   });
//   document.querySelector(".clock").innerText = `${data.name}, ${data.email}`;
// });
// console.log("end");
// ==================================================

console.log("new start");

function getUserDataFromServer(callback) {
  setTimeout(() => {
    callback(["Mohammad", "mamali@gmail.com"]);
  }, 3000);
}

function getUserAgeFromServer(name, callback) {
  setTimeout(() => {
    callback([24]);
  }, 3000);
}

const data = getUserDataFromServer((data) => {
  console.log(data);
  getUserAgeFromServer(data[0], (age) => {
    console.log(age[0]);
  });
});

console.log("new end");
