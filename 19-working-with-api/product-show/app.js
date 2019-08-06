var axios = require('axios');
var url = 'http://dct-api-data.herokuapp.com/products/301.json'

axios.get(url)
.then(function(response) {
    console.log(`${response.data.name} | ${response.data.price} | ${response.data.category}`); 
})
.catch(function(err) {
    console.log(err);
});
 
