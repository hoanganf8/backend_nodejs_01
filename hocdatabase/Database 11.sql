-- SELECT * FROM customers;

-- Alias (as)

-- SELECT `name` AS `hoten`, `email`, `created_at` FROM customers;

-- Truy vấn có điều kiện
-- SELECT * FROM customers WHERE id IN(1,3,2);
-- SELECT * FROM customers WHERE id BETWEEN 2 AND 3;
-- SELECT * FROM customers WHERE status = 1 AND (`name` LIKE '%an%' OR `email` LIKE '%an%');

-- SELECT * FROM customers WHERE deleted_at IS NULL

-- Thực hành: Tìm kiếm những khách hàng có
-- trạng thái kích hoạt
-- có từ khóa là 'an'
-- chưa được xóa mềm

-- SELECT * FROM `customers` 
-- WHERE `status` = 1 
-- AND (`name` LIKE '%an%' OR `email` LIKE '%an%') 
-- AND `deleted_at` IS NULL;

-- Bài tập 1: Khôi phục những khách hàng trong thùng rác
UPDATE customers 
SET `deleted_at` = NULL 
WHERE id IN(
SELECT id FROM customers WHERE `deleted_at` IS NOT NULL
)

-- Bài tập 2: Xóa tất cả khách hàng trong thùng rác



