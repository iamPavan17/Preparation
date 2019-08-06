// Complete the squareSum/square_sum/SquareSum method so that it squares each number passed into it and then sums the results together.

// For example:

// squareSum([1, 2, 2]); // should return 9

function squareSum(num) {
    let total = 0;
    num.forEach((n, index) => {
        num[index] = Math.pow(n, 2);
        total += num[index];
    });

    return total;
}

console.log(squareSum([1, 2, 2]));