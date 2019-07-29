var student = {
    name: 'Rama',
    sayName: function() {       //when a property has its value as a function, then it is called as method
        return `My name is ${this.name}.`   //when we are inside the obejct, we need to use this keyword, this is a keyword, which species the variable included in this object.
    },
    college: 'PESU',
    myCollege: () => {
        return `I studied in ${student.college}.`   
    }
};

// console.log(student);
console.log(student.sayName);   //returns [Function: sayName]   it is just reference 
console.log(student.sayName());
console.log(student.myCollege());