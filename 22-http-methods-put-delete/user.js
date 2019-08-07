var axios = require('axios');
var id = 1;
var url = `https://jsonplaceholder.typicode.com/posts/${id}`;

axios.delete(url) 
.then(function(response) {
    console.log(response.data)
})
.catch(function(err) {
    console.log(err);
});