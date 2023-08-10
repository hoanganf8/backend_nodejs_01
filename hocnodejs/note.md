# HTTP GET

- Khi gửi 1 request
- Server sẽ nhận biết được đó là GET
- Server sẽ lấy dữ liệu từ URL:

* params

https://fullstack.edu.vn/san-pham/1
https://fullstack.edu.vn/san-pham/2
https://fullstack.edu.vn/san-pham/3
https://fullstack.edu.vn/san-pham/1-khoa-hoc-fulsltack

1, 2, 3 => params
khoa-hoc-fulsltack => Gọi là slug

- querystring

https://fullstack.edu.vn/san-pham?type=1&keyword=abc

- Xử lý

- Trả về Response

## Session

- Lưu trữ phiên làm việc
- Khi tắt trình duyệt => Hết phiên
- Ví dụ: Lưu trạng thái đăng nhập, lưu trữ các thông báo
- Được lưu ở trên server: file, database, redis,...

Cách hoạt động của session

- Server có yêu cầu khởi tạo session => Tạo ra 1 id

- Lưu id và dữ liệu vào nơi lưu trữ: file, database,...

- Set Cookie với value chính là id vừa tạo được

- Khi có request tiếp theo => Server sẽ đọc được id từ Cookie => Đọc dữ liệu từ nơi lưu trữ thông qua id
