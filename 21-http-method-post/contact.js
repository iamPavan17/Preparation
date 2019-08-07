
function ContactForm(data) {
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.message = data.message;
    this.submit = function() {
        var dataToSend = {
            name: this.name,
            email: this.email,
            mobile: this.phone,
            message: this.message
        };
        var axios = require('axios');
        var url = 'http://dct-api-data.herokuapp.com/contact_forms.json'
        axios.post(url, dataToSend)
         .then(function(response) {
            console.log(response.data);
        })
        .catch(err => {
            console.log(err.response.data);
        });
    }
}

var cf1 = new ContactForm({name: 'ani', email: 'ani@gmail.com', message: 'Call back', phone: 9741412713});
cf1.submit();