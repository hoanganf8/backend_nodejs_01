use f8_backend_k1;

-- DROP TABLE products;

CREATE TABLE products(
    id int,
    name varchar(200),
    content text,
    price float,
    sale_price float,
    status tinyint(1),
    created_at timestamp,
    updated_at timestamp
);

ALTER TABLE products ADD description text AFTER sale_price;

ALTER TABLE products ADD promotion text AFTER description;

ALTER TABLE products RENAME COLUMN price to regular_price;

INSERT INTO products(id, name, content, regular_price, sale_price, description, promotion, status, created_at, updated_at) VALUES(1, 'SP 1', 'Noi dung 1', 12000, 11000, 'Mo ta 1', 'KM 1', 1, NOW(), NOW());

INSERT INTO products(id, name, content, regular_price, sale_price, description, promotion, status, created_at, updated_at) VALUES(2, 'SP 2', 'Noi dung 2', 12000, 11000, 'Mo ta 2', 'KM 2', 0, NOW(), NOW());

INSERT INTO products(id, name, content, regular_price, sale_price, description, promotion, status, created_at, updated_at) VALUES(3, 'SP 3', 'Noi dung 3', 12000, 11000, 'Mo ta 3', 'KM 3', 1, NOW(), NOW());

SELECT * FROM products;