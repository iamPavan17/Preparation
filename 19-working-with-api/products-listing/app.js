// url - http://dct-api-data.herokuapp.com/products.json

var axios = require('axios');   //helps us to load the package (or) getting the package, what we have installed
// console.log(axios)     //returns object
var url = 'http://dct-api-data.herokuapp.com/products.json';

axios.get(url).then(function(response) {
    // console.log(response.data);  
    var products = response.data;
    // Listing all the products
    // console.log(`++++++ Listing ${products.length} products ++++++`)
    // products.forEach(product => {
    //     console.log(product)
    // });

    // Sorting based on price
    // var result = products.sort(function(a, b) {
    //     return a.price - b.price;
    // });
    // console.log(result);

    // returning products, which has category Baby
    // var result = products.filter(product => {
    //     return product.category == 'Baby';
    // });

    

    console.log(result);

}).catch(function(err) {
    console.log(err);
});


// console.log('HELLO');   //prints first, because the JS is asyncronous language