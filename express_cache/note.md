# Cache Store

1. Cache File
   Lưu cache trong 1 file

2. Cache Database
   Lưu cache trong Database

3. Store cache chuyên dụng

- Redis
- Memcache

# Triển khai code như thế nào?

- Request 1 -> Đọc Database -> Lưu file cache
- Request 2 -> Kiểm tra file cache có tồn tại không?

* Tồn tại -> Đọc file cache
* Không tồn tại -> Đọc database -> Quay lại Request 1
