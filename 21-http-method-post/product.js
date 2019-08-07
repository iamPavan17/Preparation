function ProductCreate(data) {
    this.name = data.name;
    this.price = data.price;
    this.category = data.category;
    this.COD = data.COD;
    this.stock = data.stock;
    this.submit = ()=> {
        var dataToSend = {
            name : this.name,
            price: this.price,
            category: this.category,
            cod: this.COD,
            stock: this.stock
        }
        var axios = require('axios');
        axios.post('http://dct-api-data.herokuapp.com/products.json', dataToSend)
        .then((result) => {
            console.log(result.data)    
        }).catch((err) => {
            console.log(err);
        });
    }
}

var prd1 = new ProductCreate({name: 'Laptop', price: '80000', category: 'Computer and Electronics', COD: false, stock: 5});
prd1.submit();