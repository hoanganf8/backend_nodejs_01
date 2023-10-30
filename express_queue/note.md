## Tình huống đặt ra

### Đăng ký tài khoản

- Validate Form
- Insert Database
- Gửi email
- Show Message

### Đặt hàng

- Validate Form
- Insert Database
- Gửi email thông báo
- Chuyển hướng sang trang cảm ơn (Thank You Page)

### Gửi email hàng loạt

- Cần gửi email tới danh sách khách hàng
- Số lượng email: 1000

Giải pháp: Sử dụng Queue (Cấu trúc dữ liệu)
Job -> Công việc

## Giải quyết tình huống đăng ký tài khoản:

- Validate Form
- Insert Database
  Tạo job gửi email đưa vào Queue
- Show Message

Làm sao để các Job trong Queue hoạt động
-> Tiến trình chạy ngầm -> Thực thi từng Job -> Job nào xong -> Xóa khỏi hàng đợi

Tạo ra 1 table queue chứa các job cần thực thi

Thường: Queue sẽ được lưu ở 1 server khác (Redis Server)
