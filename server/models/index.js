var db = require('../db');


module.exports = {
  messages: {
    get: function (callback) {
      //put together in a data structure
      var connection;
      
      db.then(function(conn) {
        connection = conn;
        return connection.query(`SELECT username, text, roomname FROM messages 
          JOIN rooms
          ON messages.room_id = rooms.id
          JOIN users
          ON messages.user_id = users.id
          `)
      }).then(function(rows){
        console.log('ALL MESSAGES ROWS: ', rows);
        callback(rows);
        connection.end()
      })
    },
    post: function (msg, callback) {
      
      var connection;
      var user_id;
      var room_id;
      let {username, roomname, text} = msg;
      console.log(username, roomname, text);
      
      db.then(function(conn) {
        connection = conn;
        return connection.query(`SELECT id FROM users WHERE username IN ('${username}')`);
      }).then(function(rows){
        if (rows.length) {
          return rows;
        } else {
          return connection.query( `INSERT INTO users (username) VALUES ('${username}');`)
          .then(function(){
            return connection.query( `SELECT id FROM users WHERE username LIKE '${username}';`);
          });
        }
      }).then(function(rows){
        user_id = rows[0].id;
        return connection.query(`SELECT id FROM rooms WHERE roomname IN ('${roomname}')`);
      }).then(function(rows){
        if (rows.length) {
          return rows;
        } else {
          return connection.query( `INSERT INTO rooms (roomname) VALUES ('${roomname}');`)
          .then(function(){
            return connection.query( `SELECT id FROM rooms WHERE roomname LIKE '${roomname}';`);
          });
        }
      }).then(function(rows){
        room_id = rows[0].id;
        return connection.query(`INSERT INTO messages (text, room_id, user_id) VALUES ('${text}', ${room_id}, ${user_id})`)
        .then(function(){
          connection.end();
          callback();
        })

      }).catch(function(err){
        res.status(500).send(`something broke: ${err}`);
        throw err;
      })
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username, callback) {
      var connection;
      var user_id;
      console.log('USERS POST USERNAME: ', username);
      
      db.then(function(conn) {
        connection = conn;
        return connection.query(`SELECT id FROM users WHERE username IN ('${username}')`);
      }).then(function(rows){
        if (rows.length) {
          return rows;
        } else {
          return connection.query( `INSERT INTO users (username) VALUES ('${username}');`)
          .then(function(){
            return connection.query( `SELECT id FROM users WHERE username LIKE '${username}';`);
          });
        }
      }).catch(function(err){
        
      });
    }
  }
};

