// Frequency of letters in a sentence

function freqLetters(sentence) {
    var resultObj = {};
    sentence.split('').forEach(function(ele1) {
        let count = 0;
        sentence.split('').forEach(function(ele2) {
            if(ele1 === ele2){
                count++;
            }
        });
        resultObj[ele1] = count;
    });
    return resultObj;
}

var sentence = 'I love JavaScript';
console.log(freqLetters(sentence));