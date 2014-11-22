var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var connection = mysql.createConnection({
  database: 'chat',
  host     : '127.0.0.1',
  user     : 'root',
  password : ''
});

connection.connect(function(err) {
  if(err){
    console.log("WHAT THE HELL: ");
  }
  // connected! (unless `err` is set)
});

// INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'

// sqlQuery = INSERT INTO message (id, username, text, room) VALUES (NULL, 'frank', 'fat', 'fuck');
// DELETE
// UPDATE
exports.post = function(sqlQuery, callback){
  connection.query(sqlQuery, function(err, result) {
    callback(err, result);
  });

};

exports.get = function(sqlQuery, callback){
  connection.query(sqlQuery, function(err, result) {
    callback(err, result);
  });
};
