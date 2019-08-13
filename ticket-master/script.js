var countHandler = document.getElementById('count');
var tableBodyHandler = document.getElementById('tableBody');
var formHandler = document.getElementById('myForm');
var nameHandler = document.getElementById('name');
var deptHandler = document.getElementById('dept');
var priorityHandler = document.getElementsByName('priority');
var messageHandler = document.getElementById('message');
var baseUrl = 'http://dct-api-data.herokuapp.com/tickets?api_key=befe313c9c822bc2'

function buildRow(ticket) {
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td1Text = document.createTextNode(ticket.ticket_code);
    td1.appendChild(td1Text);

    var td2 = document.createElement('td');
    var td2Text = document.createTextNode(ticket.name);
    td2.appendChild(td2Text);

    var td3 = document.createElement('td');
    var td3Tect = document.createTextNode(ticket.department);
    td3.appendChild(td3Tect);

    var td4 = document.createElement('td');
    var td4Text = document.createTextNode(ticket.priority);
    td4.appendChild(td4Text);

    var td5 = document.createElement('td');
    var td5Text = document.createTextNode(ticket.message);
    td5.appendChild(td5Text);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    
    tableBodyHandler.appendChild(tr);
} 

axios.get(baseUrl)
.then(function(response) {
    var tickets = response.data;
    // console.log(tickets);
    countHandler.innerText = tickets.length;
    tickets.forEach(ticket => {
        buildRow(ticket);
    });
})
.catch(function(err) {
    console.log(err);
});

formHandler.addEventListener('submit', function(e) {
    e.preventDefault();

    var priorityArray = Array.from(priorityHandler);
    // console.log(priorityArray)s
    var result = priorityArray.filter(priority => {
        return priority.checked == true;
    });

    // console.log(result[0].id)

    var formData = {
        name: nameHandler.value,
        department: deptHandler.value,
        priority: result[0].id,
        message: messageHandler.value
    }


    axios.post(baseUrl, formData)
    .then(function(response) {
        // console.log(response.data)
        var tickets = response.data;
        buildRow(tickets);
        // console.log(tickets);
        countHandler.innerText = Number(countHandler.innerText) + 1;
        formHandler.reset();
    })
    .catch(err => {
        console.log(err);
    })
    console.log(formData)
});