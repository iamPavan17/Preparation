/*     Write a JavaScript function to check whether an `input` is a string or not.


Test Data :
isString('DCT Academy') 
true
isString([1, 2, 4, 0])
false       */

function isString(str) {
    if(typeof(str) == 'string')    
        return true;
    return false;
}

console.log(isString('DCT Academy'));
console.log(isString([1, 2, 4, 0]));