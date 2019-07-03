var firstName = 'Rama';
var lastName = "Sita";

// String can have methods/property because JS will convert into it into String object on the fly
console.log(firstName.length);  //4 - length is a property
console.log(firstName.toUpperCase());      //RAMA - toUpperCase() is a method
console.log(firstName.indexOf('a'));    //1 - returns the position of the given character
console.log(firstName.lastIndexOf('a'));    //3 - searches from last
console.log(firstName.charAt(1));   //a - returns the character of the given index integer

var sentence = 'Make in india';
console.log(sentence.includes('india'));    //true
console.log(sentence.indexOf('in'));    //5
console.log(firstName.indexOf('z')) //returnds -1 becuase z is not there i firstName
console.log(firstName.charAt(8));   //retuns empty

console.log(firstName.slice(1,3));  //am
console.log(firstName.replace('R', 'a'))    //aama
console.log(firstName)  //Any String methods/properties won't change the original value