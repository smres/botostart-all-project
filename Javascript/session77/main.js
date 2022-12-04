// test
const email = "milad123@gmail.com";
// const regex = /^[a-zA-Z0-9._]{3,25}@\w{2,6}\.[a-z]{2,3}$/;
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
console.log(regex.test(email));

// ==================
// replace
const text = "Hi I am Milad";
const newText = text.replace(/\w{5}/,"Ali");
// const newText = text.replace(/[a-zA-Z]{5}/,"Ali");
console.log(newText);