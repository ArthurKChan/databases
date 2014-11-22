var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      var query = 'SELECT * FROM message';
      db.get(query, function(err, result){
        callback(err, result);
      });
    }, // a function which produces all the messages
    post: function (data, callback) {
      var query = 'INSERT INTO message (id, username, text, roomname) VALUES (NULL,"'
         + data.username + '","' + data.text + '","' + data.roomname + '");';

      db.post(query, function(err, result){
        callback(err, result);
      });
    }  // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      var query = 'SELECT * FROM user';
      db.get(query,function(err, result){
        callback(err, result);
      });
    },
    post: function (data, callback) {
      var query = 'INSERT INTO user (id, username) VALUES (NULL,"'
         + data.username + '");';

      db.post(query, function(err, result){
        callback(err, result);
      });
    }
  }
};
/*
insert into message (id, username, text, roomname) values (null, 'frank', 'hello', 'world');
connection.query("INSERT INTO message (id, username, text, roomname) VALUES (NULL, 'frank','hello','world');", function(err, success){if(err){console.log(err);}console.log(success);} );
*/
