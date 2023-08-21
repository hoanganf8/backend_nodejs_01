-- Tạo bảng dựa vào 1 bảng khác
-- Ví dụ: Tạo bảng customers giống bảng users

-- use f8_backend_k1;
-- CREATE TABLE customers LIKE users;

-- DROP TABLE users;
-- DROP TABLE customers;
-- DROP TABLE products;

--1. Ràng buộc NOT NULL
-- use f8_backend_k1;
-- CREATE TABLE users(
--     id int NOT NULL,
--     name varchar(100),
--     email varchar(100) NOT NULL,
--     password varchar(100) NOT NULL
-- );

-- use f8_backend_k1;
-- DESCRIBE users;
-- use f8_backend_k1;
-- INSERT INTO users(id, name, email, password) VALUES(1, 'Hoàng An', 'hoangan.web@gmail.com', '123456');

-- INSERT INTO users(id, name, email, password) VALUES(NULL, 'Hoàng An', 'hoangan.web@gmail.com', '123456');

use f8_backend_k1;
-- ALTER TABLE users MODIFY COLUMN name varchar(100) NOT NULL;
DESCRIBE users;
SELECT * FROM users;