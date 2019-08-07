// You are given two strings S1 and S2. You need to find weights of both strings and compare them. The weight of a string can be obtained by adding individual weights of the characters that make the string. The weight of individual characters are the position on which they occur in the English alphabets table; for eg, a has weight 1, z has weight 26.

// Output:

// Print 1 if the weight of the first string is greater. Print 2 if the weight of the second string is greater. Print equal if the weights are equal.

// Example:

// Input 
// 1.
// batman
// superman

// 2.
// manbat
// batman

// Output: 

// 2
// equal 

function weight(str1, str2) {
    var weightObj = {};
    let count = 1;
    // console.log(String.fromCharCode)
    for(let i = 97; i <= 122; i++, count++) {
        weightObj[String.fromCharCode(i)] = count;
    }
    
    var str1Arr = str1.split('');
    var str2Arr = str2.split('');
    let str1Total = 0;
    let str2Total = 0;
    str1Arr.forEach(s => {
        str1Total += weightObj[s];
    });
    str2Arr.forEach(s => {
        str2Total += weightObj[s];
    });

    let result;

    if(str1Total > str2Total) {
        result = 1;
    } else if(str1Total < str2Total) {
        result = 2;
    } else {
        result = 'equal'
    }

    return result;
}

// console.log(weight('batman', 'superman'));
console.log(weight('batman', 'manbat'));