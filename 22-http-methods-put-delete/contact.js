var axios = require('axios');
var id = 4;
var url = `http://dct-api-data.herokuapp.com/contact_forms/${id}.json`;

//delete -method
axios.delete(url)
.then(function(response) {
    console.log(response.data);
})
.catch(function(err) {
    console.log(err);
});