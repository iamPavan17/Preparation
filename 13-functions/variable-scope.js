function person() {
    var city = 'Bangalore';
    console.log(city);
}

person();   //Bangalore
//console.log(city);  // error - city is not defined, because city is declared inside person function, and the variable is a function scoped

function movie() {
    actor = 'Leonardo';
    console.log(actor);
}

movie();    // 'Leonardo'
console.log(actor); //'Leonardo', it works because - if we create a variable without a 'var' keyword then it is Global variable. So thats the reason it is available outside

