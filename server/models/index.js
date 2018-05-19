var db = require('../db');


module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (msg, callback) {
      console.log('MESSAGE IN MODEL', msg);
      
      var connection;
      var user_id;
      var room_id;
      let {username, roomname, text} = msg;
      
      db.then(function(conn) {
        // get connection
        connection = conn;
        // look in db for username
        return connection.query(`SELECT id FROM users WHERE username IN ('${username}')`);
      }).then(function(rows){
        console.log('User ID:', rows[0].id)
        // if username exists...
        if (rows[0].id) {
          // set id
        } else {
          // create user 
          // set id
        }
      }).then(function(doesntmatter){
        // look in db for roomname
        return connection.query(`SELECT id FROM rooms WHERE roomname IN ('${roomname}')`);
      }).then(function(rows){
        console.log('Room ID:', rows[0].id)
        // if roomname exists...
        if (rows[0].id) {
          // set id
        } else {
          // create room 
          // set id
        }
      }).then(function(doesntmatter){
        connection.query(`INSERT INTO messages (text, room_id, user_id) VALUES ('${text}', ${room_id}, ${user_id})`);
        connection.end()
        return;
      }).catch(function(err){
        throw err
      })
      
      
      
      // db.query(`SELECT id FROM users WHERE username IN ('${username}')`,
      //     function(err, res) {
      //       if (err) {
      //         console.log(err);
      //       } else {
      //         if (!res.length) {
      //           db.query(`INSERT INTO users (username) VALUES ('${username}')`
      //             , function(err, res) {
      //               err ? console.log(err) : console.log(res);
      //               db.end();
      //             });
      //         }
      //       }
            
      //     }
      //   );
      
      // db.query(`INSERT INTO messages 
      //   (text, room_id, user_id) 
      //   VALUES ('${text}',
      //    NULL, NULL)`, function(err) {
      //   if (err) {
      //     throw err;
      //   } else {
      //     // callback();
      //   }
      // });
      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

