-- use f8_backend_k1;

-- CREATE TABLE products(
--     id int primary key,
--     name varchar(200),
--     price float DEFAULT 0,
--     status tinyint(1) DEFAULT 1,
--     created_at timestamp,
--     updated_at timestamp
-- )

use f8_backend_k1;

DESCRIBE products;

use f8_backend_k1;
INSERT INTO products(id, name, created_at, updated_at) VALUES(1, 'SP 1', NOW(), NOW());

use f8_backend_k1;
SELECT * FROM products;

-- use f8_backend_k1;
-- ALTER TABLE products ALTER status SET default 0;

use f8_backend_k1;
ALTER TABLE products ALTER status DROP DEFAULT;