// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0

// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1

// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1

function gimme(numbers) {
    let max = numbers[0];
    let min = numbers[0];
    let newArr = [];
    for(let i = 0; i < numbers.length; i++) {
        if(max < numbers[i]) {
            max = numbers[i]
        }

        if(min > numbers[i]) {
            min = numbers[i];
        }
        newArr.push(numbers[i])
    }

    let minMaxArr = [];
    minMaxArr.push(max, min);

    minMaxArr.forEach(num => {
        numbers.forEach((n, index, numbers) => {
            if(n == num) {
                numbers.splice(index, 1);
            }
        });
    });

    // return numbers.indexOf(numbers[1]);
    return newArr.indexOf(numbers[0]);
} 

console.log(gimme([2, 3, 1]));
console.log(gimme([5, 10, 14]));