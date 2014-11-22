var models = require('../models');
var bluebird = require('bluebird');
var utils = require('../utils');



module.exports = {
  messages: {
    get: function (req, res) {
      console.log('getting messages');
      models.messages.get(function(err, success){
        if(err){
          res.status(404).send('Get Messed up');
        }
        console.log(success);
        // console.log('text:',success[0]['text']);
        res.send(success);
      });
      // console.log('abcdefghijklmnop');
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // console.log('whefsdjkjfas;d');
      console.log('post is happening');
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
          console.log(success);
        }
        res.send(success);
      });
    },
    post: function (req, res) {
      models.users.post(req.body, function(err, success){
        if(err){
          res.status(404).send('Messed up');
        }
        res.send(success);
      });
      // utils.collectData(req, models.users.post);
    }
  },

  // '':{
  //   get: function (req, res) {
  //     console.log('abcdefg');
  //   },
  //   post: function (req, res) {
  //    console.log('threeFour');
  //   }
  // }
};

