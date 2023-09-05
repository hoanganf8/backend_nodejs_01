SELECT 
`orders`.*, 
`customers`.`name` AS `customer_name`,
`customers`.`email`,
`status`.`name` AS `status_text`,
`order_detail`.`product_id`
-- `products`.`name` AS `product_name` 
FROM `orders` 
INNER JOIN `customers` 
ON `orders`.customer_id = `customers`.id
INNER JOIN `status`
ON `status`.id = `orders`.`status_id`
INNER JOIN `order_detail`
ON `orders`.id = `order_detail`.`order_id` 
-- INNER JOIN `products`
-- ON `products`.id = `order_detail`.product_id
-- WHERE `customers`.`email` = 'hoangan.web@gmail.com'
ORDER BY `orders`.id DESC

-- Bài tập: Nối 2 bảng trên với bảng status để trả về tên trạng thái

-- A <=> B <=> C <=> D

-- Thêm dữ liệu vào bảng order_detail => Nối tiếp với bảng odder_detail