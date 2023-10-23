# Đăng nhập thông qua mạng xã hội

Sử dụng phương thức xác thực của các mạng xã hội => Trả về thông tin tài khoản mạng xã hội (Tên, Email, Avatar,...) => Insert vào Database của ứng dụng => Thực hiện đăng nhập tự động

# Tư duy xây dựng Database chức năng đăng nhập mạng xã hội

Trên 1 ứng dụng có nhiều loại đăng nhập

- Password
- Google
- Facebook
- Github

=> Cần có 1 table để quản lý các loại đăng nhập: providers (id, name)

=> Trong bảng users => Cần bổ sung thêm trường: provider_id

Passport.js

User
=>
Route
=>
Middleware (Check các logic xem user đã đăng nhập hay chưa?)

- Đã login => Next()
- Chưa login => Redirect về route /login
  => Controller

Xử lý route /login

Middleware: Check xem có phải ở trạng thái login hay không?

- Nếu login => Chuyển về trang chủ
- Chưa login => Next() => Hiển thị giao diện Form login

Khi submit form login => Gọi Middleware của Passport

- Lấy dữ liệu (username, password)
- Viết logic truy vấn database xem username và password có hợp lệ hay không?
- Nếu không hợp lệ => gọi hàm callback để trả về thông báo lỗi
- Nếu hợp lệ => Gọi hàm callback để trả về thông tin user

=> Passport dựa vào callback để set session cho user hoặc flash session
