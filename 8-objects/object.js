// An object in javascript, is an unordered, key indexed collection of values.
// In object key will always be unique, in other words we can't have two same keys. 

var product = {
    name: 'Marker',
    price: 25,
    qty: 5,
    maker: 'Camle'
};

console.log(product.name);
console.log(product['name']);

var studentArr = ['Ravi', 'ravi@gmail.com', 9999999999, 'Web Development', 'reference'];
var studentNested = [
    ['name', 'Ravi'],
    ['email', 'ravi@gmail.com'],
    ['phone', 999999999],
    ['course', 'Web Development']
];

var studentObj = {
    name: 'Ravi',
    email: 'ravi@mail.com',
    phone: 999999999,
    course: 'Web Development',
    source: 'Reference',
    skills: ['js', 'ruby', 'py', 'php'],
    education: [
        {
            '12th': '2012'
        },
        {
            'Degree': '2016'
        },
        {
            'Masters': '2019'
        }
    ]
};

