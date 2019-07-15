var str = 'js rb py';
console.log(str.split( ));  //[ 'js rb py' ]

var names = ['rama', 'laxman', 'hanuman', 'laxman'];
console.log(names.join(', '));  //rama, laxman, hanuman  

console.log(names.slice(0,2));  //[ 'rama', 'laxman' ] 

var numbers = [1,2,3,4,5,6,7,8,9,0];
//  '(123) 456-7890' using slice and join

var first = numbers.join('').slice(0,3);
// console.log(first)
var second = numbers.join('').slice(3,6);
// console.log(second)
var third = numbers.join('').slice(6,10);
// console.log(third)
console.log(`(${first}) ${second}-${third}`);

//concat()

var even = [10,20];
var odd = [15, 21];
console.log(even.concat(odd));

//indexOf() - starts from the first
console.log(names.indexOf('laxman')); //1 
//if it returns -1 that means the value is not exist
console.log(names.indexOf('sita')); //-1
//lastindexOf() - starts from the last
console.log(names.lastIndexOf('laxman'));   //3


