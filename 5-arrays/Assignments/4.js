// Write a JavaScript function to get nth largest element from an unsorted array. 

// Test Data :
// 1. nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4);
// return 89

// 2. nthlargest([10,5,20,25],2);
// return 20

function nthlargest(arr, index) {
    var max = arr[0];
    for(var i = 0; i <= index; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
console.log(nthlargest([10,5,20,25],2));
