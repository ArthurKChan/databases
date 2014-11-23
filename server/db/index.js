var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root", "");

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var User = sequelize.define('user', {
  username: Sequelize.STRING
});

var Message = sequelize.define('message', {
  // username: Sequelize.STRING,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

// User.hasMany(Message);
Message.belongsTo(User, {foreignKey:'userid', foreignKeyConstraint: true});

Message.sync();
User.sync();

exports.User = User;
exports.Message = Message;


