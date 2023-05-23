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
// getUserData().then((data) => {
//   console.log(data);
//   getUserAge(data.name).then(age => {
//     console.log(age);
//   })
// });
console.log("end");
// ==================================================
// async await
async function displayData() {
  const data = await getUserData();
  console.log(data);
  const age = await getUserAge(data.name);
  console.log(age);
}
displayData();
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