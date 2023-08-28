-- SELECT * FROM customers;

-- Alias (as)

-- SELECT `name` AS `hoten`, `email`, `created_at` FROM customers;

-- Truy vấn có điều kiện
-- SELECT * FROM customers WHERE id IN(1,3,2);
-- SELECT * FROM customers WHERE id BETWEEN 2 AND 3;
SELECT * FROM customers WHERE status = 1 AND (`name` LIKE '%an%' OR `email` LIKE '%an%');


