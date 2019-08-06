var axios = require('axios');
var url = 'http://dct-api-data.herokuapp.com/products/312.json';

axios.get(url)
.then(function(response) {
    var product = response.data;
    // Listing reviews
    
    product.reviews.forEach(function(review) {
        // console.log(review);
        console.log(`User - ${review.user} \nBody - ${review.body}\nRatings - ${review.rating}\n`)
})
})
.catch(function(err) {
    console.log(err)
}); 

