create database hw6_5;
\c hw6_5;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  age INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO users (name, email, age) VALUES
('Ali Valiyev', 'ali.valiyev@example.com', 25),
('Zarina Karimova', 'zarina.karimova@example.com', 30),
('Rustam Oripov', 'rustam.oripov@example.com', 28),
('Madina Saidova', 'madina.saidova@example.com', 22),
('Shoxrux Normatov', 'shoxrux.normatov@example.com', 27);
