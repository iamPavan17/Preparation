var n1 = 10, n2 = 12.3, n3 = 13.7;
console.log(typeof (n1));   //returns number
console.log(typeof (n2));   //returns number
console.log(typeof (n3));   //returns number

//Math obj
console.log(Math.PI);
console.log(Math.pow(n1, 2));   100
console.log(Math.ceil(n2)); //13
console.log(Math.floor(n2));    //12
console.log(Math.abs(-21)); //21
console.log(Math.min(n1, n2, n3));  //10
console.log(Math.max(n1, n2, n3));  //13.7
console.log(Math.random());

//Type Conversion
var a = '10', b = 15.5, c = 21;
console.log(typeof (a));    //string
console.log(Number(a) + c); //31
console.log(a + b)  // 1015.5
console.log(parseInt(b));   //15
console.log(parseFloat(c));     //21
console.log(String(b)); //15
console.log(typeof String(b));  //string
console.log(typeof (b));    //number

// + operator
console.log("-------------- + Operator --------------");
console.log(5 + 5); //10
console.log("5" + 5);   //55
console.log("5" + 5 + 5);   //555
console.log(5 + 5 + "5");   //105
console.log(5 * '5');   //25
console.log('5' - '5'); //0
console.log(5 / '5');   //1
console.log("5" + (10 + 5));    //515

// var numbers = [];
// console.log(numbers.length);    //length property
// numbers.push(1);    //push() is a method