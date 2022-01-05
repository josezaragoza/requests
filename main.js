const axios = require('axios');
const apikey = '9b4V7GqPvj8MtNh9x165FjzGJQvImDzu';
const searchTerm = process.argv[2];
console.log(searchTerm)



axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${searchTerm}&limit=1`).then(resp=>{

console.log(resp.data.data[0].bitly_url);
})