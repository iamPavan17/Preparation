// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// TEST Case

// 1. fakeBinary('3457') returns '0011'

// 2. fakeBinary('1234') returns '0000'

function fakeBinary(n) {
    let numbersArr = n.split('');
    console.log(numbersArr);
    numbersArr.forEach((num, i) => {
        if(Number(num) >= 5) {
            numbersArr[i] = '1';
        } else if(Number(num) < 5) {
            numbersArr[i] = '0';
        }
    });
    return numbersArr.join('');
}

console.log(fakeBinary('3457'));