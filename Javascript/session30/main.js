// تمرین

// const contact = [
//   "milad-09180000000",
//   "ali-09120000000",
//   "mehran-09390000000",
//   "david-00151453360",
//   "asma-096985221125",
// ];
// const searchName = prompt("search a name:");
// for (let i = 0; i < contact.length; i++) {
//   const splitedContact = contact[i].split("-");
//   if (splitedContact[0] === searchName) {
//     console.log(`number of ${splitedContact[0]} is ${splitedContact[1]}`);
//     break;
//   } else {
//     console.log("user not found");
//   }
// }

// =============================================

// const number = prompt("Enter a number");
// for (let i = 1; i < number; i++) {
//   const root = Math.sqrt(i)
//   console.log(root);
//   if (Math.floor(root) === root) {
//     console.log(root);
//   }
// }

// =============================================

const number = prompt("Enter a number");
for (let i = 1; i <= number; i++) {
  const root = Math.sqrt(i);
  console.log("all", root);
  if (Math.floor(root) !== root) {
    continue;
  }
  console.log(i);
}
