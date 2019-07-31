 function hello() {
     return 'Hello there';
 }

 console.log(hello());  //invoking a function
 console.log(hello);    //referencing a function 
 console.log(typeof hello); //function
 console.log(typeof hello());   //string, because it's returned value is a string

var arr = [() => {
    return 'Hi'
}];

console.log(arr[0]());

function greeting(name) {   // name = parameter
    return `Good morning, ${name} `;
} 

console.log(greeting('Rama'));  //'Rama' = argument

