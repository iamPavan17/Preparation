var product = {
    name: 'Marker',
    price: 25
};

console.log(product['name'])
console.log(Object.keys(product));  // to get all the properties or keys
console.log(Object.values(product));    // to get all the values in an object
console.log(Object.values(product).includes('Marker'));

//remove a property
delete product.price;

//adding a property
product.description = 'White board maker';

for(var key in product) {
    console.log(`${key} - ${product[key]}`);    //we can't use .(dot) operator
}
