var n1 = 10;
var n2 = 20;

function sum() {
    n1 = 100;  
    n2 = 200;
    return n1 + n2;
}

console.log(sum());
console.log(n1);    //because we are reassign the variables in the function
console.log(n2);


var a = 10;
var b = 20;

function add() {
    var a = 100;    // this is local to add() function.
    var b = 200;
    return a + b;
}

console.log(add());
console.log(a);
console.log(b);