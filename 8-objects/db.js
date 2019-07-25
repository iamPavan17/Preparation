var student1 = {
    name: 'john', 
    email: 'john@mail.com',
    course: 'JS'
}

var student2 = {
    name: 'roman',
    email: 'roman@ial.com',
    course: 'Ruby'
};

var student3 = {
    name: 'seth',
    email: 'seth@mail.com',
    course: 'PY'
};

var students = []
students.push(student1);
students.push(student2);
students.push(student3);

// 1. display elements at each index {}
// 2. display student inof 'name' | 'email' | 'course'

// ravi | 'ravi@mail.com' | 'WEB'

students.forEach(function(student, index) {
    console.log(`${index+1}. ${student.name} | ${student.email} | ${student.course}`);
});
