var axios = require('axios');
var name = 'Rama';
var key = 'SBrwJgoFzvJcoBbmMr';

var url = 'https://gender-api.com/get';
axios.get(url, {
    params: {name, key}
})
.then(function(response) {
    console.log(`The gender of ${name} is ${response.data.gender}.`)
})
.catch(function(err) {
    console.log(err);
})  ;