// synchronous vs asynchronous
// single thread

// console.log("1");
// console.log("2");
// for (let i = 0; i < 100; i++) {
//   console.log(i);
  
// }
// console.log("3");

// =========================
// callback

// console.log("Start");
// function getUserData(callback) {
//   setTimeout(() => {
//     callback ({
//       name: "Milad",
//       email: "milad@botostart.ir"
//     })
//   } , 3000)
// }
// const data = getUserData(data =>{
//   console.log(data);
// });

// console.log("End");

// =========================
// callback hell

console.log("Start");
function getUserData(callback) {
  setTimeout(() => {
    callback ({
      name: "Milad",
      email: "milad@botostart.ir"
    })
  } , 3000)
}


function getUserAge(name, callback) {
    setTimeout(() => {
      callback ({age: 24})
    }, 2000);
}

const data = getUserData(data =>{
  console.log(data);
  const age = getUserAge(data.name , age1=> {
    console.log(age1)
  });
});

console.log("End");