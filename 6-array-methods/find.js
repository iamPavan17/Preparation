var names = ['ramesh', 'suresh', 'veeresh', 'ganesh'];
var present = names.find(function(name) {
    return name == 'ganesh'
});

console.log(present);   //  'ganesh'
var absent = names.find(name => {
    return name == 'asd'
});

console.log(absent);    //undefined;


var students = ['ravi', 'rakesh', 'pavan', 'pavan']; 
//findTimes(students, 'pavan');
//return 'pavan appeares 2 times'

//findTimes(students, 'gokul');
//return gokul is not in the list

function findTimes(students, name) {
    var result = students.filter(student => {
        return student == name;
    });
    // console.log(result);
    if(result.length) 
        return `${name} appeares ${result.length} times`;
    return `${name} is not in the list`
}

console.log(findTimes(students, 'pavan'));
console.log(findTimes(students, 'gokul'));