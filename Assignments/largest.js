// Write a JavaScript function to get nth largest element from an unsorted array. 

// Test Data :
// 1. nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4);
// return 89

// 2. nthlargest([10,5,20,25],2);
// return 20

function nthlargest(numbers, index) {
    let max = numbers[0];
    for(let i = 0; i <= index; i++) {
        if(max < numbers[i]) {
            max = numbers[i]
        }
    }
    console.log(max)
}

nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4);
nthlargest([10,5,20,25],2);