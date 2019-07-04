/*  Write a JavaScript function to find a word within a string. 
Test Data :
console.log(findWord('The quick brown fox', 'fox')); 
console.log(findWord('aa bb cc dd aa', 'aa'));
Output : 
"'fox' was found 1 times." 
"'aa' was found 2 times."   */

function findWord(str, word) {
    var count = 0;
    var arr = str.split(' ');
    for(i = 0; i <= arr.length; i++) {
        if(word == arr[i]) 
            count++;
    }
    return `'${word}' was found ${count} times.`
}

console.log(findWord('The quick brown fox', 'fox')); 
console.log(findWord('aa bb cc dd aa', 'aa'));