function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
    this.greet = function() {
        return `Hello, ${this.firstName} ${this.lastName}!`
    }
}

var person1 = new Person('Bob', 'Smith');
console.log(person1.greet());
var person2 = new Person('Steve', 'Smith');
person2.age = 12;
console.log(person2)