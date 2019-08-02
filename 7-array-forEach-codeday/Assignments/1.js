// Write a function that accepts three arguments and returns true if only one of those arguments is truthy, and false if not.

// Examples:

// INPUT: onlyOne(false, false, true)
// OUTPUT: true
// INPUT: onlyOne(0, 1, 2)
// OUTPUT: false

function onlyOne(a, b, c) {
    var arr = [];
    arr.push(a, b, c);
    var count = 0;
    arr.forEach(ele => {
        if(ele) {
            count ++;
        }
    });

    if(count === 1) return true;
    return false;
}

console.log(onlyOne(false, false, true))
console.log(onlyOne(0, 1, 2))