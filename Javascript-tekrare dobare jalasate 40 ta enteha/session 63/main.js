// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const data = JSON.stringify({
  title: "foo",
  body: "bar",
  userId: 1,
});
const header = {
  "Content-type": "application/json; charset=UTF-8",
};
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: data,
  headers: header,
})
  .then((response) => response.json())
  .then((json) => console.log(json));
