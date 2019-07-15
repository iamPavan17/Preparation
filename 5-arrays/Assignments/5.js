// Write a JavaScript function to get a random item from an array.

// Test Input: 

// 1. randomElement([10,20,30,40]);

// 2. randomElement(['a','b','c']);

// Output 

// 1. should return some random element from array 

// 2. should return some random element from array 

function randomElement(arr) {
    var length = arr.length;
    return arr[Math.floor(Math.random() * length)];
}

console.log(randomElement([10,20,30,40]));
console.log(randomElement(['a','b','c']));