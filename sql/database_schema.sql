CREATE DATABASE IF NOT EXISTS haberportal;

USE haberportal;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- CREATE DATABASE IF NOT EXISTS haberportal;

-- USE haberportal;

-- CREATE TABLE users (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     username VARCHAR(255) NOT NULL,
--     email VARCHAR(255) UNIQUE NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     role ENUM('admin', 'user') DEFAULT 'user', -- Rol tanımı: admin veya user
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
--     -- Rol belirtilmeden (varsayılan 'user')
-- INSERT INTO users (username, email, password) 
-- VALUES ('ali123', 'ali@example.com', 'sifre123');

-- -- Rol belirtilerek ('admin')
-- INSERT INTO users (username, email, password, role) 
-- VALUES ('admin1', 'admin@example.com', 'adminpass', 'admin');

-- );
