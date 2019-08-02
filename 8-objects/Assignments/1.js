// Write a function to display the powers of the given super hero 

 

var superHeroes = [
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
// TEST CASE -

// 1. superPower(superHeroes, "Molecule Man");
// returns 'Radiation resistance, Turning tiny, Radiation blast'

// 2. superPower(superHeroes, 'Iron Man'); 
// returns 'Iron Man is not in the super heroes list'

function superPower(superHeroes, name) {
    for(var i = 0; i < superHeroes.length; i++) {
        if(superHeroes[i].name === name) {
            return superHeroes[i].powers
        } else {
            return `${name} is not in the super heroes list`;
        }
    }
}

console.log(superPower(superHeroes, "Molecule Man"))
console.log(superPower(superHeroes, 'Iron Man'))