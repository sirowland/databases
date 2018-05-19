var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      res.send('this is a get request on messages');
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('controller recieved a message: ', req.body);
      models.messages.post(req.body);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

