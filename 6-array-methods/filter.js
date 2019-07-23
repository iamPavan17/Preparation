var numbers = [10, 15, 20, 25, 30, 35];
var result = numbers.filter(function(num) {
    return num % 2 == 0;
});
console.log(result);    //[ 10, 20, 30 ]

var greater25 = numbers.filter((num) => {
    return num > 25;
});
console.log(greater25);     //[ 30, 35 ]

//  var values = ['dct', 560001, 'academy', 'bangalore', 430];
// 1.
//filterStrValues(values);
//return ['dct', 'academy', 'bangalore'];

// 2.
//filterNumValues(values);
//return [560001, 430];

// 3.
//filterValues(values, <data type>);    //return based on the data type

var values = ['dct', 560001, 'academy', 'bangalore', 430];


function filterStrValues(values) {
    var result = values.filter(function(value) {
        return typeof(value) == 'string'
    });
    return result;
}

function filterNumValues(values) {
    var result = values.filter(value => {
        return typeof(value) == 'number'
    });
    return result;
}

function filterValues(values, dT) {
    var result = values.filter(value => typeof(value) == dT)
    return result;
}

console.log('---------------------');
console.log(filterStrValues(values));   //[ 'dct', 'academy', 'bangalore' ]
console.log(filterNumValues(values));   //[ 560001, 430 ]
console.log(filterValues(values, 'string')); //[ 'dct', 'academy', 'bangalore' ]
console.log(filterValues(values, 'number'));    //[ 560001, 430 ]
