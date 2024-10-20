DROP DATABASE mercury_db;
CREATE DATABASE mercury_db;

USE mercury_db;

CREATE TABLE users (
    email varchar(255),
    password varchar(255),
    firstName varchar(255),
    lastName varchar(255)
);
