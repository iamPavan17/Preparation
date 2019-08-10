var appHandler = document.getElementById('app');
        var ul = document.createElement('ul');
        var url = 'http://dct-api-data.herokuapp.com/products.json';
        axios.get(url)
        .then(function(response) {
            response.data.forEach(data => {
                var li = document.createElement('li');
                var liText = document.createTextNode(data.name);
                li.appendChild(liText);
                ul.appendChild(li);
            });

            // console.log(ul);
            appHandler.innerHTML = ""
            appHandler.appendChild(ul);
        });