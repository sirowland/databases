var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //go get all the messages
      models.messages.get(function(data) {
        res.status(200).send(JSON.stringify(data));
      });
      //put together in a data structure
        //then res send stringified obj
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('controller recieved a message: ', req.body);
      models.messages.post(req.body, function(){
        res.status(201).send('Message Stored');
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log('USER RECIEVED: ', req.body);
      models.users.post(req.body.username, function(){
        res.status(201).send('If user is new it has been created');
      });
    }
  }
};

