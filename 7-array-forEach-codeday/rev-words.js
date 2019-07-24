// Test case
// var str = 'i.like.this.program.very.much';
// o/p: much.very.program.this.like.i

var str = 'i.like.this.program.very.much';

function reverseWords(str) {
    var revStr = str.split('.');
    var result = [];
    revStr.forEach(str => {
        result.unshift(str);
    });
    return result.join('.');
}

console.log(reverseWords(str));