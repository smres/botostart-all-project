// Test
const email = "smr8012101067@gmail.com";
const regex = /^[a-zA-Z0-9._]{3,25}@\w{2,6}\.[a-z]{2,3}$/;
console.log(regex.test(email));


// ======================

// replace
const text = "Hi I am Mohammad Reza";
const newText = text.replace(/[a-zA-Z]{8}\s[a-zA-Z]{4}/, "mamali");
console.log(newText);