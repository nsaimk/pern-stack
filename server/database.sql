CREATE DATABASE social;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    user_password VARCHAR(50),
    user_email VARCHAR(50),
    user_photo VARCHAR(50),
    user_cohort VARCHAR(50),
);