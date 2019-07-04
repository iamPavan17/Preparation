/*  Write a JavaScript function to repeat a string a specified times. 
Test Data :
console.log(repeatString('a', 4)); 
console.log(repeatString('a'));
Output : 
"aaaa" 
"Error in string or count."

Note - without using repeat method  */

function repeatString(str, num) {
    if(num) {
        var arr = [];
        for(i = 1; i <= num; i++) {
            arr.push(str)
        }
        return arr.join('');
    }
    return 'Error in string or count';
}

console.log(repeatString('a', 5));
console.log(repeatString('a'));