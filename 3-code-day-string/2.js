/*  Write a JavaScript function to split a string and convert it into an array of words. 
Test Data :
console.log(stringToArray("Robin Singh"));
["Robin", "Singh"]  */

function toArray(str) {
    return str.split(' ');
}

console.log(toArray("Robin Singh"));
