CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--    Describe your table here.
-- );
-- DROP table user;
-- DROP table message;
-- DROP table room;

CREATE TABLE `user` (
  `id` INT(40) NOT NULL AUTO_INCREMENT,
  `username` CHAR(40),
  PRIMARY KEY  (`id`)
);

CREATE TABLE `message` (
  `id` INT(40) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY  (`id`),
  `username` CHAR(40),
  `text` CHAR(180),
  `roomname` CHAR(40)
);

CREATE TABLE `room` (
  `roomName` CHAR(40),
  `id` INT(40) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY  (`id`)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

