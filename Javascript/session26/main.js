// alert("Hello World")
// const age = prompt("please enter your age:")
// console.log(age);
// if (age > 40) {
//   console.log("you are old");
// }else {
//   console.log("you are young");
// }

// age > 40 ? console.log("you are old") : console.log("you are young");

// if (age < 10) {
//   console.log("نو کودک هستی");
// } else if(age >= 10 && age <= 20 ){
//   console.log("تو نوجوان هستی");
// } else if(age > 20 && age <= 40 ){
//   console.log("تو جوان هستی");
// }
//  else if(age > 40 && age <= 50 ){
//   console.log("تو میانسال هستی");
// }
//  else if(age > 50 ){
//   console.log("تو پیر هستی");
// }

const result = confirm("Are you sure?")
console.log(result);
if (result) {
  console.log("You said ok");
} else {
  console.log("You said cancel");
}