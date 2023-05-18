const axios = require("axios");

const data = {
  text: "test text",
  title: "test title",
  tags: "tag1,tag2,tag3"
}

axios.post("https://jsonplaceholder.typicode.com/posts", data)
.then((res) => {
  console.log(res.data);
});
