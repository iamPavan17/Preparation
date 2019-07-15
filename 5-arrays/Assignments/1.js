// Write a JavaScript function to remove a specific element from an array. 

// Test data :
// console.log(removeArrayElements([2, 5, 9, 6], 5));
// output - [2, 9, 6]

function removeArrayElements(arr, element) {
    var index = arr.indexOf(element);
    arr.splice(index, 1);
    return arr;
}

console.log(removeArrayElements([2, 5, 9, 6], 5));