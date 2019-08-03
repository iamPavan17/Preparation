// Create the function reverseString that reverses a string, and returns the value of the reversed string.

// NOTE: Do not use the built-in Array .reverse() method!

// Examples:

// INPUT: reverseString("hello");
// OUTPUT: 'olleh'
// INPUT: reverseString('Greetings from the moon!');
// OUTPUT: '!noom eht morf sgniteerG'

function reverseString(str) {
    var strArr = str.split('');
    var result = [];
    strArr.forEach(function(ele) {
        result.unshift(ele);
        // console.log(ele)
    })
    // console.log(strArr)
    console.log(result.join(''))
}

reverseString("hello");
reverseString('Greetings from the moon!');