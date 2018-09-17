var express = require('Express');
var app = express();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'www.db4free.net',
    user     : 's140390',
    password : 'abc123**',
    database : 'db140390'
  });

app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.render('pages/index');
});

app.get('/students', function (request, response) {

    connection.connect()

    connection.query('select * from students', function (err, rows, fields) {
        if (err) throw err
        response.render('pages/students', { students: rows });
      })
      
      connection.end()
});

app.get('/subjects', function (request, response) {
    response.render('pages/index');
});

console.log('App is running at http://localhost:8080');

app.listen(8080);