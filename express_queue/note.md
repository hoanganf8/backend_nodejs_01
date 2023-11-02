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

## Nhắc lại Queue:

Khi thực thi 1 công việc

- Công việc đó có mất nhiều thời gian hay không?
- Công việc đó có cần người dùng phải đợi hay không? (Treo trình duyệt)
- Trải nghiệm: Đặt hàng, gửi liên hệ, feedback,...

Không thực thi ngay công việc => Đẩy công việc vào hàng đợi (Cho xếp hàng) -> Kho lưu trữ

Sử dụng 1 tiến trình khác để xử lý các công việc đã xếp hàng (Không liên quan đến user hay còn gọi là các tiến trình chạy ngầm)

Dựa vào kho lưu trữ để thực thi từng công việc (First In - First Out -> Vào trước thực hiện trước) -> Công việc nào xong thì xóa đi

## Tổ chức Code

1. Job:

- Định nghĩa tên công việc
- Nội dung công việc -> Logic cần xử lý

2. Dispatch:

Đẩy 1 công việc thực tế vào hàng đợi

- Dữ liệu
- Tên công việc

3. Execute Job

- Thực thi từng job và xóa job đã xong (Hoặc đã failed 3 lần)
- Sử dụng thông qua Cronjob
