CREATE DATABASE IF NOT EXISTS CaveAKing;

USE CaveAKing;

CREATE TABLE Admin (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(80) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Demonstration (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE King (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE Organizes (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Admin_id INT NOT NULL,
    demonstration_id INT NOT NULL,
    CONSTRAINT fk_organizes_Admin FOREIGN KEY (Admin_id) REFERENCES Admin(id),
    CONSTRAINT fk_organizes_demonstration FOREIGN KEY (demonstration_id) REFERENCES Demonstration(id)
);

CREATE TABLE Participate (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    king_id INT NOT NULL,
    demonstration_id INT NOT NULL,
    CONSTRAINT fk_participate_king FOREIGN KEY (king_id) REFERENCES King(id),
    CONSTRAINT fk_participate_demonstration FOREIGN KEY (demonstration_id) REFERENCES Demonstration(id)
);