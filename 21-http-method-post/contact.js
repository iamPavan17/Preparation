
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

        var errObj = {};
        let flag = false;
        let nameVal = /^[a-zA-Z ]+$/.test(dataToSend.name);
        if(!nameVal) {
            errObj['name'] = 'Name should contain only characters';
            flag = false;
        } else {
            flag = true;
        }

        let phoneVal = /^\d{10}$/.test(dataToSend.mobile);
        if(!phoneVal) {
            errObj['phone'] = 'Phone number should be only 10 digits.'
            flag = false;
        } else {
            flag = true;
        }

        if(flag) {
            var axios = require('axios');
            var url = 'http://dct-api-data.herokuapp.com/contact_forms.json'
            axios.post(url, dataToSend)
            .then(function(response) {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err.response.data);
            });
        } else {
            console.log(errObj);
        }
    }
}

var cf1 = new ContactForm({name: 'ani', email: 'ani@gmail.com', message: 'Call back', phone: 9741412713});
cf1.submit();