//Test case:    i/p: [1, 2, 1, 2, 1, 3]
                // o/p:    2
                // i/p: [20,10]
                // o/p: 10

function balancedArray(numbers) {
    var arrlength = numbers.length;
    var firstHalf, seconfhalf;
    firstHalf = 0, seconfhalf = 0;
    for(var i = 0; i < (arrlength / 2); i++) {
        firstHalf += numbers[i];
    }
    for(var i = arrlength / 2; i < arrlength; i++) {
        seconfhalf += numbers[i];
    };
    var result = firstHalf - seconfhalf;
    return result = result < 0 ? `${Math.abs(result)} should be added to first half` : `${result} should be added to second half`
}

console.log(balancedArray([1, 2, 1, 2, 1, 3]));
console.log(balancedArray([20,10]));