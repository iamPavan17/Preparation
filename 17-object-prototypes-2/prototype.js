// if we want to introduce a new methods and properties to an object we can use prototype

Array.prototype.unique = function() {
    var result = [];
    this.forEach(function(ele) {
        if(result.indexOf(ele) < 0) {
            result.push(ele);
        }
    });
    return result;
}

Array.prototype.first = function() {
    return this[0];
}

Array.prototype.last = function() {
    return this[this.length-1];
}

var numbers = [10,10,30,30,20];
var names = ['ramesh', 'suresh', 'ramesh', 'ganesh']

console.log(numbers.unique());
console.log(names.unique());

console.log(numbers.first());
console.log(numbers.last());