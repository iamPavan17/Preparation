// Write a JavaScript function to create a specified number of elements with pre-filled numeric value array. 

// Test Data :
// 1. arrayFilled(6, 0); 
//     output:  [0, 0, 0, 0, 0, 0]
// 2. arrayFilled(4, 11);
//      output: [11, 11, 11, 11]

function arrayFilled(index, value) {
    var arr = new Array(index);
    arr.fill(value);
    return arr;
}

console.log(arrayFilled(6, 0));
console.log(arrayFilled(4, 11));