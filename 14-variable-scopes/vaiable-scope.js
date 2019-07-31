var n1 = 10;
var n2 = 20;

function add(n1, n2) {  
    n1 = 1000;  //changing the local variables
    n2 = 2000;
    var n3 = n1 + n2;
    return n2;
}

console.log(add(n1, n2));
// console.log(n1);
// console.log(n2)
// console.log(n3);    // returns error, because the n3 is declared inside add() function