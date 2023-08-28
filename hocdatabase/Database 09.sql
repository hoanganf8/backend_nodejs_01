-- use f8_backend_k1;

-- CREATE TABLE products (
--     id int primary key auto_increment,
--     name varchar(100),
--     status tinyint(1) default 1,
--     price float default 0,
--     created_at timestamp,
--     updated_at timestamp
-- )

-- use f8_backend_k1;
-- DESCRIBE products;

-- use f8_backend_k1;
-- INSERT INTO products(name, created_at, updated_at) VALUES('SP 2', NOW(), NOW());

-- use f8_backend_k1;
-- SELECT * FROM products;
use f8_backend_k1;
ALTER TABLE phones MODIFY COLUMN id int auto_increment