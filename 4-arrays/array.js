//An array is an ordered collection, integer indexed, collection of values

var players = ['dhoni', 'virat', 'rahul'];
console.log(players);
console.log(typeof players);    // 'object'

var player = {

};  //object

console.log(typeof player); // 'object'
console.log(Array.isArray(player)); //false
console.log(players[0]); //'dhoni'
console.log(players[1].toUpperCase());  //'VIRAT'
console.log(players[9]); //  undefined

//last index will always be (length-1)
 
//properties and methods   

//length
console.log(players.length);    //3
//reverse()
console.log(players.reverse()); //[ 'rahul', 'virat', 'dhoni' ]
//sort()
console.log(players.sort());    //[ 'dhoni', 'rahul', 'virat' ]
//fill()
var numbers = [1,2];
console.log(numbers.fill(10));  //[10,10]
//pop()
console.log(numbers.pop()); //10 - returns the deleted element
//push()
console.log(numbers.push(1));   //2 - eturns the length of an array
//shift()
console.log(numbers.shift(1));  //10 - deletes the first element and returns the deleted element
//unshify()
console.log(numbers.unshift(11));   //2 - adds to first position and returns the length
//splice()
    // --- 1.splice(index, 0, element) - adds element at the give index
    // --- 2.splice(index, 1<no. elements>) - removes the number of elements from an index

//join()
var nums = [1,2,3];
console.log(nums.join(','));    //1,2,3
console.log(nums);  //[1,2,3]
//slice() - selects a part of an array and returns a new array
console.log(nums.slice(1,2));   //[2]
console.log(nums);  //[1,2,3]
