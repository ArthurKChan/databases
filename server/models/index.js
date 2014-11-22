var db = require('../db');




module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (data, callback) {
      // data {username:lsdkjfals, text:dlskfjlsd, roomname:dlfksjd}
      // template=(asldjfklsadj <%=username%> aslkfjlks sjf)
      // template= 'INSERT INTO message (id, username, text, room) VALUES (NULL,'
      //    + data.username + '","' + data.text + '","' + data.roomname + '");'





      // query = template(data);
      db.post(query);
    }  // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (data) {

    }
  }
};

