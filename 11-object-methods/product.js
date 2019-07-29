var product = {
    name: 'Marker',
    price: 50,
    description: 'white board marker',
    details: function() {
        return `${this.name} - INR ${this.price} - ${this.description}`
    }
}

console.log(product.details())