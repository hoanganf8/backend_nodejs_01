SELECT c.*, p.name AS province_name
FROM customers AS c
LEFT JOIN province AS p
ON c.province_id = p.id

-- Hàm count(), sum(), avg(), max(), min() => Kết hợp với Group By, Having

SELECT customer_id, COUNT(id) AS order_count 
FROM orders 
GROUP BY customer_id
HAVING order_count > 1

-- Bài tập: Lấy danh sách tất cả các khách hàng và tổng số đơn hàng của từng khách
SELECT *, (
SELECT COUNT(id) FROM orders
WHERE orders.customer_id=customers.id
) AS order_count 
FROM customers;

-- Sql Injection
SELECT * FROM customers WHERE email = '' OR 1=1 -- hoangan.web@gmail.com' AND `password` = '123456'

