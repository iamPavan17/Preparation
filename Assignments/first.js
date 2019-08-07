// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 


// Test Data
// first([7, 9, 0, -2]) ; // returns 7 
// first([],3); // returns []
// first([7, 9, 0, -2],3); // returns [7, 9, 0] 
// first([7, 9, 0, -2],6)); // returns [7, 9, 0, -2] 
// first([7, 9, 0, -2],-3); returns [7,9,0,-2]

function first(numbers, index) {
    // var numbersArr = numbers.split('');
    if(index > numbers.length){
        index = numbers.length;
    }
    var result = [];
    for(let i = 0; i < index; i++) {
        result.push(numbers[i])
    }
    console.log(result)
}

// first([7, 9, 0, -2],3);

first([7, 9, 0, -2],6);