// const net = sum(4, 5, 4);
// console.log(net);
// function sum(num1, num2, num3 = 2) {
//   let result = (num1 + num2) * num3;
//   return result;
// }

// =============================================

// const sum = function (num1, num2, num3 = 2) {
  //   let result = (num1 + num2) * num3;
  //   return result;
  // };
  // console.log(sum(4, 5, 4));

  // =============================================

function toCentigrad(faren) {
  const result = (5/9) * (faren -32);
  return result;
}


const temprature = toCentigrad(200);
console.log(temprature);