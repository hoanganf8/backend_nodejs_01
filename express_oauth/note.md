Ở cấp độ cơ bản nhất, trước khi có thể sử dụng OAuth 2.0, Client phải có thông tin đăng nhập riêng, client ID và client secret từ Authorization Server để nhận dạng và xác thực chính nó khi yêu cầu mã Access token.

Sử dụng OAuth 2.0, các yêu cầu truy cập do client khởi tạo, ví dụ như ứng dụng dành cho thiết bị di động, trang web, ứng dụng TV thông minh, ứng dụng dành cho máy tính để bàn,… yêu cầu mã token, trao đổi và phản hồi tuân theo quy trình chung sau:

Client yêu cầu ủy quyền (Authorization Request) từ Authorization Server, cung cấp client ID và secret làm nhận dạng. Đồng thời, cũng cung cấp các scope và endpoint URI (redirect URI) để gửi Access Token hoặc Authorization Code.

Authorization Server xác thực client và xác minh rằng scope yêu cầu được cho phép.
Resource owner tương tác với Authorization Serve để cấp quyền truy cập.

Authorization Server chuyển hướng trở lại client bằng Authorization Code hoặc Access Token, tùy thuộc vào loại. Refresh Token cũng có thể được return.

Với Access Token, client yêu cầu quyền truy cập vào tài nguyên từ máy Resource server.
Các loại tài trợ trong OAuth 2.0

# Triển khai ứng dụng OAuth 2.0

## Tạo server authorization

- Đăng nhập
- Tạo table: clients

* id
* name
* userId
* clientId
* clientSecret
* callback
* createdAt
* updatedAt

--> Xây dựng module quản lý ứng dụng (Clients)

- Xây dựng API: /auth/authorize

* GET
* Các tham số:
  - client_id
  - callback
  - scope: name,email

--> /auth/oauth?client_id={client_id}&callback=http://localhost:3000/callback&scope=name,email

--> Xử lý nghiệp vụ

Validate client_id, callback

- Thành công -> Chuyển sang form đăng nhập -> Đăng nhập xong -> Chuyển hướng về callback -> Trả về code
  ---> /callback?code={code}
- Thất bại -> Thông báo lỗi: "client, callback không hợp lệ"

Table authorizes

- id
- client_id
- user_id ---> user đăng nhập
- code
- access_token
- created_at
- updated_at

Xây dựng API: /auth/token

- POST
- Tham số:

* code

---> Xử lý:

- Validate code, client_secret
- Trả về access_token -> Lưu access_token vào bảng authorizes

Xây dựng API: /auth/authorize

- POST
- Tham số:

* access_token
* client_secret

---> Xử lý: Validate access_token, client_secret -> Lấy dữ liệu -> Trả về client
