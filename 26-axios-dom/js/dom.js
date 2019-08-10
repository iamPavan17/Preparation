var links = [
    {
        title: 'Website',
        url: 'http://www.dctacademy.com'
    }, 
    {
        title: 'facebook',
        url: 'http://www.facebook.com/dctacademy.bangalore'
    }
];

var appHandler = document.getElementById('app');
var table = document.createElement('table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');
var theadTr = document.createElement('tr');
table.setAttribute('border', '1');
table.setAttribute('class', 'table');
thead.setAttribute('class', 'thead-dark');

Object.keys(links[0]).forEach(link => {
    var th = document.createElement('th');
    var thText = document.createTextNode(link);
    th.appendChild(thText);
    theadTr.appendChild(th);
});

links.forEach(link => {
    var tbodyTr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');

    var a = document.createElement('a');
    a.setAttribute('href', link.url);
    var aText = document.createTextNode(link.url);
    a.appendChild(aText);

    var td1Text = document.createTextNode(link.title);

    td1.appendChild(td1Text);
    td2.appendChild(a);
    tbodyTr.appendChild(td1);
    tbodyTr.appendChild(td2);
    tbody.appendChild(tbodyTr);
});

thead.appendChild(theadTr);
table.appendChild(thead);
table.appendChild(tbody);
appHandler.appendChild(table);