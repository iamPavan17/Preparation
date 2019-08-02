var person = [];

person['name'] = 'rama';
person['age'] = '34';

console.log(person);    //[ name: 'rama', age: '34' ]
console.log(person.length); // 0
console.log(person['name']);
console.log(Array.isArray(person)); //true

console.log(Object.values(person)); //[ 'rama', '34' ]


// Many programming languages support arrays with named indexes.

// Arrays with named indexes are called associative arrays (or hashes).

// JavaScript does not support arrays with named indexes.

// In JavaScript, arrays always use numbered indexes.  
// JavaScript will redefine the array to a standard object.