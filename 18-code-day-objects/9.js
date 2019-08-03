// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

 

// isIsogram( "Dermatoglyphics" ) == true

// isIsogram( "aba" ) == false

// isIsogram( "moOse" ) == false // -- ignore letter case

function isIsogram(word) {
    let obj = {};
    for(let i = 0; i < word.length; i++) {
        let ch = word[i].charCodeAt(0);
        let count = 0;

        for(j = 0; j < word.length; j++) {
            if(ch == word[j].charCodeAt(0) || ch == word[j].charCodeAt(0) + 32) {
                count++;
            }
        }
        obj[ch] = count;
    }

    let objResult = Object.values(obj);
    let result = objResult.filter(function(n) {
        return n > 1;
    });

    if(result.length) {
        return false;
    } else {
        return true;
    }
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba") );
console.log(isIsogram("moOse"));