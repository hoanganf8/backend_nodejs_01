// Object: đối tượng
// Trường hợp sử dung: mô tả 1 đối tượng
// Cách gọi tên key & value:
// 1. Thuộc tính (property) -> Các key có giá trị không phải là 1 hàm (function)
// 2. Phương thức (method) -> Các key có giá trị là 1 hàm

const lion = {
    name: 'Su Tu',
    age: 2,
    run: function() {
        console.log('Runing...')
    },
}

lion.swim = function() {
    console.log('Swimming...');
}

lion.run();
lion['swim']();

// Tạo thêm 1 method cho mỗi object.