/*  Write a JavaScript function to test whether the character at the provided (character) index is upper case. 
Test Data :
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
false   */

function isUpperCaseAt(str, num) {
    var character = str[num];
    if(character == character.toUpperCase()) 
        return true;
    return false;
}

console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
