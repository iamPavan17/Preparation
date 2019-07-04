/*  Write a JavaScript function to capitalize each word in the string. 
Test Data :
console.log(capitalizeWords('js string exercises'));
"Js String Exercises"   */

function capitalizeWords(str) {
    var arr = str.split(' ');
    for(i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    return arr.join(' ');
}

console.log(capitalizeWords('js string exercises'));
