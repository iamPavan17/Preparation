// Array.length will give you the number of top-level elements in an array.

// Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.

// For example:
// deepCount([1, 2, 3]);  
// //>>>>> 3
// deepCount(["x", "y", ["z"]]);  
// //>>>>> 4
// deepCount([1, 2, [3, 4, [5]]]);  
/////>>>>> 7


function deepCount(arr) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        count ++;
        // console.log(arr[i])
        if(Array.isArray(arr[i])) {
            count += deepCount(arr[i])
        }
    }
    return count;
}

console.log(deepCount([1, 2, 3]));
console.log(deepCount(["x", "y", ["z"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]))