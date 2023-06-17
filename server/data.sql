CREATE DATABASE todoapp;

CREATE TABLE todos (
    id VARCHAR(255) primary key,
    user_email VARCHAR(50),
    title VARCHAR(30),
    progress INT,
    date VARCHAR(300)    
);

CREATE TABLE users (
    email VARCHAR(50) primary key,
    hashed_password VARCHAR(255)
);