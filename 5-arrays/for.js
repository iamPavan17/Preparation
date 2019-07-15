var names = ['ganesh', 'suresh', 'veeresh'];

//initialization; condition; increment/decrement
for(var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log('--------');

//forEach
names.forEach(function(name) {
    console.log(name);
});

//Activity
//find the total of the prices in even indexes
var numbers = [10, 20, 30, 40, 50, 60];
var sum = 0;
numbers.forEach(function(number, indexes) {
    if(indexes %2 == 0)  
        sum += number
});

console.log(sum);

//using traditional FOR
var sum = 0;
for(var i = 0; i < numbers.length; i++) {
    if(i %2 == 0) {
        sum += numbers[i]
    }
}

console.log(sum);