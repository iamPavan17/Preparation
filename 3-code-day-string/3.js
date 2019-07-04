/*  Write a JavaScript function to convert a string in abbreviated form. 
Test Data :
abbrevName("Robin Singh");
Output: "Robin S."  */


function abbrevName(str) {
    var strArray = str.split(' ');
    var firstName = strArray[0];
    return `${firstName} ${strArray[1].slice(0,1)}.`;
}

console.log(abbrevName('Robin Singh'));
console.log(abbrevName('Robin Prasad'));