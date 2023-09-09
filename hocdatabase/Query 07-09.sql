SELECT *, price + price * 5 / 100 AS price_new FROM order_detail WHERE order_id=1;

SELECT *, 
CASE 
	WHEN status = 0 THEN 'Chưa kích hoạt'
	WHEN status IS NULL THEN 'Chưa thiết lập'
	ELSE 'Kích hoạt'
	END 
AS status_text
FROM customers;

-- NOW() => Lấy thời gian hiện tại
-- MONTH() => Lấy tháng của 1 chuỗi thời gian
-- DATE() => Lấy ngày tháng năm của 1 chuỗi thời gian
-- DAY() => Lấy ngày
-- YEAR() => Lấy năm
-- MD5() => Mã hóa md5
-- SHA1() => Mã hóa SHA1

-- SELECT *, YEAR(created_at) FROM customers;

INSERT INTO customers(`name`, `email`, `password`, `status`) VALUE (
	'Nguyễn Văn A',
	'nguyenvana@gmail.com',
	MD5('123456'),
	1
)

INSERT INTO customers(`name`, `email`, `password`, `status`) VALUE (
	'Nguyễn Văn B',
	'nguyenvanb@gmail.com',
	SHA1('123456'),
	1
)

-- Định nghĩa thủ tục trong SQL
CREATE PROCEDURE getCustomers
BEGIN
SELECT * FROM customers
END

EXEC getCustomers;



