/*  Write a JavaScript function to chop a string into chunks of a given length. /
Test Data :
console.log(stringChop('resource')); 
return ["resource"]

console.log(stringChop('resource',2)); 
return [ "re", "so", "ur", "ce"] 

console.log(stringChop('dcresource',3));
 return ["dcr", "eso", "urc", "e"]  */


function stringChop(str, num) {
    if(num) {
        var arr= [];
        for(var i = 0; i <= str.length; i=i+num) {
            var a = str.substring(i, i+num);
            arr.push(a);
        }
        return arr;
    }
    return [str];
}

console.log(stringChop('resource'));
console.log(stringChop('resource', 2));
console.log(stringChop('dcresource', 3));
