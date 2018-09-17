var express = require('Express');
var app = express();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'www.db4free.net',
    user     : 'db140390',
    password : 's140390',
    database : 'abc123**'
  });

app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.render('pages/index');
});

app.get('/students', function (request, response) {
    
});

app.get('/subjects', function (request, response) {
    response.render('pages/index');
});