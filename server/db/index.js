var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var connection = mysql.createConnection({
  database: 'chat',
  host     : '127.0.0.1:3000',
  user     : 'root',
  password : ''
});

connection.connect(function(err) {
  // connected! (unless `err` is set)
});

var rows  = {id: 1, title: 'Hello MySQL'};
// connection.query('use chat');
var query = connection.query('INSERT INTO posts SET ?',
  rows, function(err, result) {
  // Neat!
});
console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
// sqlQuery = INSERT INTO message (id, username, text, room) VALUES (NULL, 'frank', 'fat', 'fuck');
// DELETE
// UPDATE
exports.post = function(sqlQuery, callback){
  connection.query(sqlQuery,callback);

};

exports.get = function(){

};
