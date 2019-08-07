// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// TEST Case

// 1. fakeBinary('3457') returns '0011'

// 2. fakeBinary('1234') returns '0000'

// Tags: basic, arrays, strings Code: DCT7

function fakeBinary(digit) {
    var digitArr = digit.split('');
    for(let i = 0; i < digitArr.length; i++) {
        if(digitArr[i] < 5) {
            digitArr[i] = '0'
        } else if(digitArr[i] >= 5){
            digitArr[i] = '1'
        }
    }
    console.log(digitArr.join(''));
}

fakeBinary('3457');