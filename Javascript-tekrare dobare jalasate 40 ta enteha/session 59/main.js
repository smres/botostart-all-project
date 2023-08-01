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
console.log("start");
function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("دیتا الان ریترن شده");
      resolve({ name: "Mohammad", email: "mamali@gmail.com" });
    }, 3000);
  });
}

function getUserAge(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(name);
      resolve({ age: 24 });
    }, 2000);
  });
}
getUserData().then((data) => {
  console.log(data);
  getUserAge(data.name).then((age) => {
    console.log(age);
  });
});
console.log("end");
// ==================================================
// PROMISE
// console.log("start");
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Hi I an a promise");
//     // resolve({ name: "mohammad reza" });
//     reject("Error Etefagh oftad!");
//   }, 3000);
// });

// promise
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => console.log(err));
// console.log("end");
// =====================================================
// var promise = new Promise((resolve, reject) => {
//   var str = "7learn.com";
//   var site = "7learn.com";
//   if (str === site) {
//     resolve({ name: "mamali" });
//   } else {
//     reject("Failed shod baba");
//   }
// });
// promise
//   .then((success) => console.log(`${success.name} Promise is successfully`))
//   .catch((failed) => console.log(`${failed}`));
