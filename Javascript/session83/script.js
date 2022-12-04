const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/91')
  .then((res)=> console.log(res.data));