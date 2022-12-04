// PROMISE

// console.log("start");
// const promise  = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Hi I am a promise");
//     reject("error etefagh oftad!")
//   }, 3000);
// });

// promise
//   .then(user =>console.log(user))
//   .catch(err => console.log(err))
// console.log("end");

// =========================
// refactor callback hell with promise

console.log("Start");
function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Milad",
        email: "milad@botostart.ir",
      });
    }, 3000);
  });
}

function getUserAge(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ age: 24 });
    }, 2000);
  });
}

getUserData()
  .then((data) => {
    console.log(data);
    return getUserAge(data.name);
  })
  .then((age) => console.log(age));
// .catch(err => console.log());

console.log("End");
