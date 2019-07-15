// Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.

// Test Data : 
// 1. numStringrange('a', "z", 2);
//     return ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

function numStringrange(start, end, index) {
    var startCode = 97;
    var endCode = 122;
    var arr = [];
    for(var i = 97; i <= endCode; i = i + index) {
        arr.push(String.fromCharCode(i));
    }

    return arr;
}

console.log(numStringrange('a', 'z', 2));