function func1(a, b, c) {
    console.log(arguments);
    console.log(arguments[0]);
    console.log(Object.keys(arguments))
    console.log(Object.values(arguments));
    console.log(Array.isArray(arguments));  //false because, it is an object
    console.log(arguments.length);
}

func1(10, 'name', [10,20])