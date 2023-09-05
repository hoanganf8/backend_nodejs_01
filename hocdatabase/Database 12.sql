-- Bài tập 1: Lấy danh sách đơn hàng của 1 khách hàng có id = 1 và đã thanh toán

-- SELECT * FROM orders WHERE customer_id = 1 AND status_id = 3

-- Bài tập 2: Lấy danh sách đơn của các khách hàng có từ khóa là 'an'

-- SELECT * FROM orders WHERE customer_id IN 
-- (SELECT id FROM customers WHERE `name` LIKE '%quan%' OR `email` LIKE '%quan%')

-- Sắp xếp: ORDER BY
SELECT * FROM `customers` ORDER BY `status` DESC, id DESC

-- Giới hạn: LIMIT OFFSET

-- SELECT * FROM `customers` ORDER BY id DESC LIMIT 2 OFFSET 1
-- SELECT * FROM `customers` ORDER BY id DESC LIMIT 1, 2





