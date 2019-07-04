/*  Write a JavaScript function to check whether a string is blank or not. 
    Test Data :
    console.log(isBlank('')); 
    console.log(isBlank('abc'));
    true 
    false */

function isBlank(str) {
    if(str.length) 
        return false;
    return true;
}

console.log(isBlank(''));   //true
console.log(isBlank('abc'));    //false