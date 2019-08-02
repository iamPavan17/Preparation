// Write a function isDivisible that accepts two numbers and returns true if the first number is cleanly divisible by the second, and false if not.

// Examples:

// INPUT: isDivisible(9, 3);
// OUTPUT: true
// INPUT:isDivisible(9, 4);
// OUTPUT:false

function isDivisible(num1, num2) {
    console.log(num1 % num2 === 0)
}

isDivisible(9, 3);
isDivisible(9, 4);