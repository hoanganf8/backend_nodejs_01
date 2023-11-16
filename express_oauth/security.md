# Vấn đề bảo mật

## File .env

- Chmod --> Phân quyền ở trên Linux
- Chown --> Chuyển sang quyền root

--> Tránh quyền 777

## Database

- Chặn Remote Connect trong Database
- Nếu Server Database và Server ứng dụng khác nhau --> Bật Remote --> Thêm IP vào whitelist --> Chỉ cho phép kết nối từ Server chỉ định
- Đổi port mặc định của Database
- Thiết lập username, password phức tạp
- Không được dùng username root để kết nối vào ứng dụng
- Mỗi Database chỉ nên thuộc 1 user

## Server

- Đổi port mặc định của Server
- Đổi password phức tạp
- Thiết lập tưởng lửa (Firewall)
- Nên sử dụng CDN để giấu địa chỉ IP thật của Server

## Upload File

- Thiết lập các định dạng được phép upload
- Thiết lập dung lượng tối đa được phép upload
- Xử lý nén ảnh

## XSS (Cross-Site Scripting)

- Chuyển hướng, DOM can thiệp tạo form mới --> Khai thác dữ liệu qua form
- Đánh cắp cookie
  Cách xử lý: Loại bỏ các thẻ html trước khi được show UI

## CSRF (Cross-Site Request Forgerys)

- Hacker biết được request xóa dữ liệu trong trang quản trị
  Ví dụ: POST /delete/{id}

- Giả sử web: bị XSS --> Ví dụ: XSS ở form liên hệ

- Cách tấn công: Gửi form liên hệ, nội dung form đoạn code js (Gửi request xóa) --> Khi admin mở thông tin liên hệ --> Đoạn code js tự động thực thi --> request sẽ hoạt động --> khóa học tự động bị xóa

Cách xử lý: Tạo csrf token

GET /active?courseId=1&token=abc --> Token phải được generate từ trang danh sách

Viết 2 middleware

- csrfToken
- customMethod

## SQL Injection

- Kỹ thuật tiêm đoạn mã xấu --> Gây ảnh hưởng tới Database

## HTML Injection

- Sửa html bằng devtools --> submit form
  ==> Giải pháp: Validate phía server

## Tắt Debug

3 môi trường

- dev
- test
- product

## Sử dụng HTTPS

## Không sử dụng các package cũ

## Sử dụng Rate Limit

## Brute Force

- Dùng tool để dò password

Giải pháp:

- Dùng captcha (Nên dùng recapcha v3)
- 2FA --> Xác minh 2 bước
- Rate Limit
- Khóa tài khoản khi đăng nhập sai (Quá 5 lần)
