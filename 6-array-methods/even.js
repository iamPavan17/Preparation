// var numbers = [10, 15, 20, 25, 30, 35];
// findsEvensCount(numbers);
// should return count of even numbers ie, 3


// findEvens(numbers);
// should return all even numbers ie [10,20,30]

function findsEvensCount(numbers) {
    var count = 0;
    numbers.forEach(number => {
        if(number % 2 == 0) 
            count++;
    });
    return count;
}

function findEvens(numbers) {
    var evenNumbers = [];
    numbers.forEach(number => {
        if(number % 2 == 0)     
            evenNumbers.push(number);
    });
    return evenNumbers;
}

var numbers = [10, 15, 20, 25, 30, 35];
console.log(findsEvensCount(numbers));
console.log(findEvens(numbers));

//  isElePresent(numbers, 10); 
//  should return true if the element is present

function isElePresent(numbers, element) {
    return numbers.includes(element);
}

console.log(isElePresent(numbers, 110));    //falses
console.log(isElePresent(numbers, 10));    //true