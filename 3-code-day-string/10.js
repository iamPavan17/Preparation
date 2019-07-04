/*  Write a JavaScript function to test whether a string starts with a specified string. 
Test Data :
console.log(startsWith('js string exercises', 'js'));
true    */

function startsWith(str, word) {
    var arr = str.split(' ');
    if(arr[0] == word) 
        return true;
    return false;
}

console.log(startsWith('js string exercises', 'js'));
