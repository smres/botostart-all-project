// const text = "Hi I am Milad and I am 24567 years old";
// // const regex = /\w{5}/g;
// const regex = /\w{5}/g;
// console.log(text.match(regex));

// =============================================================

const auth = "Bearer Authorization_token";
const regex = /Bearer (?<mamaliToken>[^ $]*$)/;
const result = regex.exec(auth);
console.log(result);
