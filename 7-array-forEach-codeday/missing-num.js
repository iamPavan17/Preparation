//  Given an array of size n-1 and given that there are numbers from 1 to n with one missing, the missing numbersis to be found.

//i/p: [1,2,3,5]    - o/p: 4

var numbers = [1,2,3,5];
function missingNumber(numbers) {
    var count = 1;
    var missingNumber = [];
    numbers.forEach(number => {
        if(number !== count) 
            missingNumber.push(count);
        count++;
    });
    return missingNumber[0] = missingNumber[0] ? missingNumber[0] : 'Missing number not found!!';
}

console.log(missingNumber(numbers));    //4
console.log(missingNumber([1,2,3,4]));  //5