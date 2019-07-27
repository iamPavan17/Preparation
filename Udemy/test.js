var a = 15;

switch (a > 15) {
    case 15: console.log('asd'); break;
    default: console.log('qwe'); break;
}

var pet = {
    "name": "Barky",
    "species" : "dog",
    "foods": {
      "likes": ["bones", "carrots"],
      "dislikes": ["tuna"]
    }
  };

console.log(`${pet.foods.likes}`)