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
