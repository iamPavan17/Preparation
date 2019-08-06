// Extend the Array prototype/class with a function to return all elements of that array, except the ones with the indexes passed in the parameter.

// The function should accept either an array or a single integer as parameters, like this:

// var array = ['a', 'b', 'c', 'd', 'e'];
// var indices = [1,3]
// // array2 should contain ['a', 'c', 'e']
// or

// var array = ['a', 'b', 'c', 'd', 'e'];
// var indices2 = [1]
// // array2 should contain ['a', 'c', 'd', 'e']


function arrayExcept(arr, indices) {
    let result = [];
    indices.forEach(i => {
        arr.splice(i, 1);
    });
    return arr;
}


var array = ['a', 'b', 'c', 'd', 'e'];
var indices = [1,3]
console.log(arrayExcept(array, indices))