// if we pass primitive data type (string, number, boolean, etc) to a function, it makes copy of the data.

var name = 'Rama';
var num = 10;

function setNumber(num) {
    num = 100;
    console.log(num);
}

function steName(name) {
    name = 'Ram';
    console.log(name);
}

setNumber(num);
console.log(num);

steName(name);
console.log(name);