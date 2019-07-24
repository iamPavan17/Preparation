var names = ['amesh', 'suresh', 'ganesh'];

for(var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log('----FOREACH-------');
//forEach - calls a function for each array element
names.forEach(function(name) {
    console.log(name);
});

//forEach also takes index as an second argument
names.forEach(function(name, index) {
    console.log(`${name} found at ${index}th index.`);
})