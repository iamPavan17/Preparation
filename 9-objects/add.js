var obj1 = {
    n1: 10
};
var obj2 = {
    n1: 20
};

//addObj(obj1, obj2)    //return 30

function addObj(obj1, obj2) {
    return obj1['n1'] + obj2['n1'];
}

// console.log(typeof obj1.n1);
console.log(addObj(obj1, obj2));

var objEvens = {
    evens: [10,20,30]
};
var objOdds = { 
    odds: [15,25,35] 
}

function addEvenOddsObj(obj1, obj2) {   // return { evenSum: 60, oddSum: 75}
    var evens = 0; var odds = 0;
    obj1.evens.forEach(even => {
        evens += even;
    });
    obj2.odds.forEach(odd => {
        odds += odd;
    });
    
    var EvenOddObj = {};
    EvenOddObj.evens = evens;
    EvenOddObj.odds = odds;

    return EvenOddObj;
}
//using reduce() - wich executes a function which we provide, on each element of an array which is going to return a single value

function addEvensObj(obj1) {
    var result = obj1.evens.reduce(function(a, b) {
        return a + b;
    });

    return result;
}

console.log('Using Reduce method  '+addEvensObj(objEvens));

console.log(addEvenOddsObj(objEvens, objOdds));

function moveToArray(obj1, obj2) {  //return [ {evens: [10,20,30]}, {odds: [15,25,35]} ]
    var EvenOddArray = [];
    EvenOddArray.push(obj1, obj2);
    return EvenOddArray;
}   
console.log(moveToArray(objEvens, objOdds));