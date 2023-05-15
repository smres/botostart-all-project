const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
// xhr.onload = () => {
//   const data = JSON.parse(xhr.response);
//   console.log(data);
//   //   for (const i of data) {
//   //     const { username, address:{city} } = i;
//   //     console.log(username, "***", city);
//   //   }
//   //   console.log(xhr.status);
// };
// xhr.send();

// =================================

xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
const body = {
  name: "mamali",
  body: "Khob hastam",
  userId: 1,
};
xhr.setRequestHeader("Content-Type", "Application/json")
xhr.onload = () => {
  const data = JSON.parse(xhr.response);
  console.log(data);
};
xhr.send(JSON.stringify(body));
