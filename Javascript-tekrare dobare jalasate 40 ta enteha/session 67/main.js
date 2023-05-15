// Closure
// function closure() {
//   let iterator = 0;
//   function counter() {
//     iterator++;
//     return iterator;
//   }
//   return counter;
// }
// const data = closure();
// console.log(data());
// console.log(data());
// console.log(data());

// ==========================================

// let iterator = 0;
// function func() {
//   iterator++;
//   return iterator;
// }

// function func2() {
//   iterator++;
//   return iterator;
// }

// console.log(func());
// console.log(func());
// console.log(func());

// console.log(func2());
// console.log(func2());
// console.log(func2());
// console.log(func2());

// ==================================

// function func() {
//   let iterator = 0;
//   iterator++;
//   return iterator;
// }
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());

// =================================
function closure() {
  let iterator = 0;
  function counter() {
    iterator++;
    return iterator;
  }
  return counter;
}

const data = closure();
console.log("Data");
console.log(data());
console.log(data());
console.log(data());
console.log(data());
console.log(data());

const count = closure();
console.log("Count");
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
