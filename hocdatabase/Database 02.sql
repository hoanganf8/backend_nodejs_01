-- CREATE DATABASE f8_backend_k1

-- Tạo bảng users
-- id int
-- name varchar(50)
-- email varchar(100)
-- password varchar(100)
-- status tinyint(1)
-- created_at datetime
-- updated_at datetime

-- use f8_backend_k1;

-- CREATE TABLE users(
--     id int,
--     name varchar(50),
--     email varchar(100),
--     password varchar(100),
--     status tinyint(1),
--     created_at datetime,
--     updated_at datetime
-- );

-- Xem danh sách tables
-- use f8_backend_k1;
-- SHOW TABLES;

-- Xem cấu trúc table
-- use f8_backend_k1;
-- DESCRIBE users;

-- Sửa bảng

-- 1. Thêm cột mới
-- use f8_backend_k1;
-- ALTER TABLE users ADD phone varchar(15) AFTER status;

-- 2. Sửa cột
-- use f8_backend_k1;
-- ALTER TABLE users MODIFY COLUMN phone varchar(20);

-- ALTER TABLE users RENAME COLUMN phone to phone_number;

-- ALTER TABLE users CHANGE COLUMN phone_number phone varchar(15);

-- 3. Xóa cột
-- use f8_backend_k1;
-- ALTER TABLE users DROP COLUMN phone;