var appHandler = document.getElementById('app');
var url = 'http://dct-api-data.herokuapp.com/products.json';
// var table = document.createElement('table');
// var thead = document.createElement('thead');
// var tbody = document.createElement('tbody');

axios.get(url)
.then(function(response) {
    var products = response.data;
     var table = `
     <table border = '1'>
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            ${(products.map(product => {
                return  `
                    <tr>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                    </tr>
                `
            })).join('')} 
        </tbody>
     </table>
     `;
     appHandler.innerHTML = table;
});