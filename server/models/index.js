var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root", "");
var db = require("../db");

module.exports = {
  messages: {
    get: function (callback) {
      db.Message.findAll({include: [db.User] }).complete(callback);
    }, // a function which produces all the messages
    post: function (data, callback) {
      db.User.findOrCreate({where: {username: data.username}})
        .complete(function(err, results) {
          var id = results[0].dataValues.id;
          console.log('*******************USER ID:',id,' *************************');
          db.Message.create({
            userid: id,
            text: data.text,
            roomname: data.roomname
          }).complete(callback);
        });
    }  // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.User.findAll().complete(callback);
    },
    post: function (data, callback) {
      db.User.create({username: data.username}).complete(callback);
    }
  }
};
/*
insert into message (id, username, text, roomname) values (null, 'frank', 'hello', 'world');
connection.query("INSERT INTO message (id, username, text, roomname) VALUES (NULL, 'frank','hello','world');", function(err, success){if(err){console.log(err);}console.log(success);} );
*/
