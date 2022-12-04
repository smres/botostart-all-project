/*const text = "Hi I am Milad and milad I am 24567 years old";
const regex = /\w{3,5}/g;
//const regex = /\w{5}/g;
//const regex = /Milad/gi;
console.log(text.match(regex));*/

// =========================================

const auth = "Bearer Authorization_token";
const regex = /Bearer (?<miladToken>[^ $]*$)/
const result = regex.exec(auth);
console.log(result.groups.miladToken);