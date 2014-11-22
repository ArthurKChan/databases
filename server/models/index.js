var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root", "");

var User = sequelize.define('user', {
  username: Sequelize.STRING
});

var Message = sequelize.define('message', {
  username: Sequelize.STRING,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

module.exports = {
  messages: {
    get: function (callback) {
      Message.sync().success( function(){

        Message.findAll().success(function(msgs) {
          // This function is called back with an array of matches.
          callback(undefined, msgs);
        });

     }).error(callback);

    }, // a function which produces all the messages
    post: function (data, callback) {
      Message.sync().success(function(){
        var newMsg = Message.build(data);

        newMsg.save().success(function(){
          console.log('post message successful');
          callback(undefined, data)
        });

      }).error(callback);
    }  // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      User.findAll().success(function(usrs) {
        // This function is called back with an array of matches.
        for (var i = 0; i < usrs.length; i++) {
          console.log(usrs[i].username + " exists");
        }
        callback(undefined, usrs);
      });
    },
    post: function (data, callback) {
     User.sync().success(function() {
      var newUsr = User.build(data);
      newUsr.save().success(callback);
     });
    }
  }
};
/*
insert into message (id, username, text, roomname) values (null, 'frank', 'hello', 'world');
connection.query("INSERT INTO message (id, username, text, roomname) VALUES (NULL, 'frank','hello','world');", function(err, success){if(err){console.log(err);}console.log(success);} );
*/
