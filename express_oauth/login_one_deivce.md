# Đăng nhập trên 1 thiết bị

## Database

1. users

- id
- name
- email
- password

2. login_token

- id
- user_id
- token

## Giải thuật

## Request 1

- Login (Passport) --> Tạo ra 1 token
- Kiểm tra trong bảng login_token có token với user_id đang đăng nhập hay không?

* Nếu không có

- Lưu token vào bảng login_token
- Tạo 1 cookie lưu token được khởi tạo

* Nếu có:

- Xóa tất cả token khác đi (Liên quan đến user_id đang đăng nhập)
- Lưu token vào bảng login_token
- Tạo 1 cookie lưu token được khởi tạo

## Request 2

- Passport check authenticate
- Nếu hợp lệ --> Check token (Dựa cookie và Table login_token)

* Nếu token trong Database khớp với Token lấy được từ cookie --> Next()
* Nếu token trong Database không hợp lệ --> Logout

Đăng nhập

User => Route /login => Passport => AuthController (handleLogin)

- Tạo token
- Lưu token
- Xóa token
- set cookie

--> Redirect về trang chủ --> authMiddleware sẽ làm việc

Kiểm tra trong req có user không?
--> Không có -> redirect /login
--> Có -> check token trong DB và cookie
---> Không tồn tại --> redirect /login
---> Tồn tại --> next() --> Show trang chủ
