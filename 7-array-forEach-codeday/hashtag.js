// i/p: 'Hello World'
// o/p: '#HelloWorld'

function hashTag(str) {
    var hashTag = '#';
    var arr = str.split(' ');
    arr.forEach(a => {
        hashTag += a;
    });
    return hashTag;
}

console.log(hashTag('Hello World'));
console.log(hashTag('Make In India'));