# Cơ sở dữ liệu là gì?

Cơ sở dữ liệu là hệ thống bao gồm rất nhiều thông tin, dữ liệu được xây dựng theo một cấu trúc nhất định nhằm đáp ứng nhu cầu khai thác, sử dụng của nhiều người hay chạy nhiều chương trình ứng dụng cùng một lúc.

Khi áp dụng hình thức lưu trữ này, nó sẽ giúp khắc phục được những điểm yếu của việc lưu file thông thường trên máy tính. Các thông tin lưu trữ sẽ đảm bảo được nhất quán, hạn chế tình trạng trùng lặp thông tin.

# Các loại cơ sở dữ liệu

1. Cơ sở dữ liệu quan hệ (Oracle, MySQL, MS Server, PostgreSQL) => Sử dụng ngôn ngữ truy vấn SQL
2. Cơ sở dữ liệu hướng tài liệu (MongoDB, Couchbase)
3. Cơ sở dữ liệu dạng khoá – giá trị (Redis, Memcached)
4. Cơ sở dữ liệu phi quan hệ (Cassandra, HBase)
5. Cơ sở dữ liệu dạng bộ máy tìm kiếm (Elasticsearch)

6. SQL: Ngôn ngữ truy vấn: Không thay đổi
7. MySQL, SQL Server: Phần mềm, update thường xuyên => Hệ quản trị cơ sở dữ liệu

Các phần mềm hỗ trợ thao tác với Database quan hệ

1. navicat
2. phpmyadmin
3. mysql workbench
4. sequel pro => Chỉ hỗ trợ trên macos

CSDL => Table => Field => Record

Tạo bảng

CREATE TABLE tenbang(
field1 data_type,
field2 data_type,
field3 data_type
)

Bài tập:

- Tạo bảng products có các trường sau

* id => int
* name => varchar()
* content => text
* price => float
* sale_price => float
* status => tinyint
* created_at => timestamp
* updated_at => timestamp

- Thêm 2 cột mới cho bảng trên trước cột status

* description => text
* promotion => text

- Đổi tên cột price thành regular_price

- Thêm 3 bản ghi cho bảng products

- Hiển thị danh sách các sản phẩm

Bài tập:

users, posts, group

Thực hiện thêm dữ liệu cho 3 bảng

Database Relationship

1. One To One

Quan hệ 1-1

Ví dụ: 1 user có 1 số điện thoại

Bài tập: tạo bảng phones

- id
- phone

2. One to Many

Quan hệ 1 - N

Ví dụ: 1 nhóm có nhiều người dùng

3. Many To Many

Quan hệ N - N

Ví dụ: posts và categories

- 1 bài viết thuộc nhiều chuyên mục
- 1 chuyên mục có nhiều bài viết

=> Để thiết kế ra quan hệ này => Cần có bảng trung gian

4. Quan hệ đa hình: Polymorephic

Ví dụ:

Review sản phẩm:
Table products
Table review_products

Review bài viết
Table posts
Table review_posts

Sử dụng polymorephic để xây dựng

products:

- id
- name
- created_at
- updated_at

posts:

- id
- title
- content
- created_at
- updated_ats

comments:

- id
- subject
- message
- object_type
- object_id
