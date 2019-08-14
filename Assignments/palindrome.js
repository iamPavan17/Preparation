// Have the function palindrome(str) accept a string argument, and return the boolean true if the argument is a palindrome (meaning that the string is the same forward as it is backward). Otherwise, return the boolean false.

// NOTE - without using .reverse() method

// Examples:

// INPUT: palindrome("racecar");
// OUTPUT: true
// INPUT: palindrome("animal");
// OUTPUT: false

function palindrome(str) {
    var strArr = str.split('');
    // console.log(strArr)
    var result = [];
    strArr.forEach(s => {
        result.unshift(s);
    });
    console.log((result.join('') === str)? true: false)
}

palindrome("animal");
palindrome("racecar");