const axios = require('axios');

axios
  .delete('https://jsonplaceholder.typicode.com/posts/100') 
  .then((res)=> console.log(res.data));