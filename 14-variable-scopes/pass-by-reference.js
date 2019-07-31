// when ever we pass an object data types to a function, it always refer to global scope variables, if we change or modify a data inside a function, then it will reflect the original value.

var numbers = [10];

function chaneNumber(numbers) {
    numbers[0] = 100;
    console.log('inside a function '+ numbers[0]);
}

console.log('before calling a function '+numbers[0])
chaneNumber(numbers);
console.log('after calling function and outside a function '+numbers[0]);

var person = {
    name: 'Ani'
};

function changeName(name) {
    name.name = 'Aniruddha'
    return name.name;
}

console.log(person.name)
console.log(changeName(person));
console.log(person.name)