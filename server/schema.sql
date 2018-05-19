CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT PRIMARY KEY,
  user_name VARCHAR(20)
);

CREATE TABLE rooms (
  id INT PRIMARY KEY,
  room_name VARCHAR(20)
);

CREATE TABLE messages (
  id INT PRIMARY KEY,
  text VARCHAR(200),
  room_id INT,
  user_id INT,
  FOREIGN KEY (room_id) 
    REFERENCES rooms(id),
  FOREIGN KEY (user_id)
    REFERENCES users (id) 
);




/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

