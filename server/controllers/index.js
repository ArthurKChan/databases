var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, success){
        if(err){
          res.status(404).send('Get Messed up');
        }
        console.log(success, '************************************');
        res.json(success);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function(err, success){
        if(err){
          res.status(404).send('Messed up');
        }
        res.send(success);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('getting users');
      models.users.get(function(err, success){
        if(err){
          res.status(404).send('users get Messed up');
          // console.log(success);
        }
        res.json(success);
      });
    },
    post: function (req, res) {
      models.users.post(req.body, function(err, success){
        if(err){
          res.status(404).send('Messed up');
        }
        res.send(success);
      });
    }
  },
};

