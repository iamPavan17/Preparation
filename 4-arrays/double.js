/*  Test Run
    names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
    r = 6;
    res = "Sheldon"
*/

function doubleCola(names, r) {
    for(var i = 0; i < r; i++) {
        var name = names.shift();;
        names.push(name, name);
        // console.log(names)
    }
    return names[0];
}

var names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
var r = 6;
console.log(doubleCola(names, r));
