var mysql = require('promise-mysql');
// var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

//methods that talk to database
module.exports = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});
