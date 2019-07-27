// You will be given an array which lists the current inventory of stock in your store. Example:

// var currentInventory = [ {name: "HTC", stock: 25},{name: "Nokia", stock: 1000}, {name: "Samsung", stock: 50},{name: "Sony", stock: 10}, {name: "Apple", stock: 15}];

// Your will also be given an array which list the new inventory being delivered to your store today. Example:

// var newInventory = [ {name: "LG", stock: 5}, {name: "Sony", stock: 10}, {name: "Samsung", stock: 5},{name: "Apple", stock: 15}];

// Your task is to write a function that when invoked

// updateInventory(currentInventory, newInventory);

// returns the updated list of your current inventory :

// [{name: "HTC", stock: 25}, {name: "Nokia", stock: 1000}, {name: "Samsung", stock: 55}, {name: "Sony", stock: 20}, {name: "Apple", stock: 30}, {name: "LG", stock: 5}]

var currentInventory = [ {name: "HTC", stock: 25},{name: "Nokia", stock: 1000}, {name: "Samsung", stock: 50},{name: "Sony", stock: 10}, {name: "Apple", stock: 15}];

var newInventory = [ {name: "LG", stock: 5}, {name: "Sony", stock: 10}, {name: "Samsung", stock: 5},{name: "Apple", stock: 15}];

function updateInventory(currentInventory, newInventory) {
    var inventory = [];
    inventory.push(newInventory[0])
    //adding to existing names
    newInventory.forEach(newInventory => {
        currentInventory.forEach(currentInventory => {
            if(newInventory.name == currentInventory.name) {
                currentInventory.stock += newInventory.stock;
            }
        });
    });
    
    //loop for getting unique name from an object
    var count = 0;
    for(var i = 0; i < newInventory.length; i++) {
        // console.log(newInventory[i].name)
        for(var j = 0; j < currentInventory.length; j++) {
            if(newInventory[i].name == currentInventory[j].name) {
                inventory.splice(i, 1);
            }
        }
    }
    currentInventory.push(inventory[0]);
    console.log(currentInventory);
}

updateInventory(currentInventory, newInventory);
