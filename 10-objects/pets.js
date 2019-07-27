var pets = [
    {
      "name": "Meowsy",
      "species" : "cat",
      "foods": {
        "likes": ["tuna", "catnip"],
        "dislikes": ["ham", "zucchini"]
      }
    },
    {
      "name": "Barky",
      "species" : "dog",
      "foods": {
        "likes": ["bones", "carrots"],
        "dislikes": ["tuna"]
      }
    },
    {
      "name": "Purrpaws",
      "species" : "cat",
      "foods": {
        "likes": ["mice"],
        "dislikes": ["cookies"]
      }
    }
  ];

// function petDetails(pets) {
//     pets.forEach(pet => {
//         console.log(`${pet.name} the ${pet.species} likes ${pet.foods.likes[0]} and ${pet.foods.dislikes[0]}.`)
//     })
// }

// petDetails(pets);
function petDetails(pet) {
    console.log(`${pet.name} the ${pet.species} likes ${pet.foods.likes} and ${pet.foods.dislikes}`);
    // console.log(`${pet.foods.likes}`)
}

pets.forEach(pet => {
  petDetails(pet)
})

