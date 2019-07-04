/*  Write a JavaScript function to Uncapitalize the first letter of each word of a string. 
Test Data :
console.log(unCap('Js String Exercises'));
"js string exercises"   */

function unCap(str) {
    var arr = str.split(' ');
    for(i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toLowerCase() + arr[i].slice(1);
    }
    return arr.join(' ');
}

console.log(unCap('Js String Exercises'));