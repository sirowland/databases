var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (msg, callback) {
      console.log('MESSAGE IN MODEL', msg);
      console.log(db);
      db.connect()
      db.query(`INSERT INTO messages VALUES(1,'${msg}', NULL, NULL)`, function(err) {
        if (err) {
          throw err;
        } else {
          // callback();
        }
      });
      db.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

