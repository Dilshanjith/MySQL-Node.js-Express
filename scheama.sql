CREATE DATABASE notes_app;
USE notes_app

CREATE TABLE notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    contents TEXT NOT NULL,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO notes (title,contents)
VALUES
('My first Note','A note about something'),
('My Second Note','A note about something else');