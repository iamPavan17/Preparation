// Write a JavaScript function to capitalize each word in the string. 
// Test Data :
// console.log(capitalizeWords('js string exercises'));
// "Js String Exercises"

function capitalizeWords(sentence) {
    var sentenceArr = sentence.split(' ');
    var result = [];
    sentenceArr.forEach(function(word) {
        result.push(word[0].toUpperCase() + word.slice(1));
    })
    return result.join(' ');
}

console.log(capitalizeWords('js string exercises'));