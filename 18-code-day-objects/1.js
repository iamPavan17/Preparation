function zooInventory(myZoo) {
    var result = [];
    myZoo.forEach(function(animal) {
        // console.log(animal[0]);
        // console.log(animal[1][0])
        // console.log(animal[1][1])
        let zoo = `${animal[0]} the ${animal[1][0]} is ${animal[1][1]}`;
        result.push(zoo);
    });
    return result;
}

var myZoo = [
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
];

console.log(zooInventory(myZoo));