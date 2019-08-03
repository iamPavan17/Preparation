function Product(name, price) {
    this.name = name;
    this.price = price;
    this.details = function() {
        return `${this.name} - INR ${this.price}`
    }
};

var p1 = new Product('Marker', 15);
var p2 = new Product('Scale', 5);
var p3 = new Product();

console.log(p1.details());
p1.isFeatured = true;

// if we want to introduce a new property to all objects, means we need to create a property for constructor like the following code.  
Product.prototype.isFeatured = true;
console.log(p2.isFeatured); 