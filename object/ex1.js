/**
 * 
 * 1. Syntax
 * 2. Variables
 * 3. Data types
 * 4. Function
 * 5. If else / switch case
 * 
 * 
 */



const nam = {
    // key: value,
    // key2: value2,
    name: 'Nguyen Thanh Nam', // Thuộc tính (property) => thuộc tính 'name'
    age: 21,
    address: 'Ha Noi'
}


const newKey = 'company';
const course = {
    name: 'NodeJS',
    price: 1000000,
    author: 'Hoang An',
    [newKey]: 'F8', // compacy: 'F8'
    // v.v
}

// Thêm 1 key mới
// Thêm 1 key mới
// Thêm 1 key mới

console.log(course)

// # Các cách truy cập vào giá trị của 1 object:
// 1. object.key
// 2. object['key']
// 3. object[varible] // varible có giá trị là key. VD: var key = 'name'

// Bài tập: Tạo 3 objects bất kỳ có ít nhất 3 thuộc tính.

// # Các cách thêm dữ liệu vào 1 object

// 1. object.newKey = 'New value';
// 2. object['newKey'] = 'New value';

// var newKey = 'brand';
// 3. object[newKey] = 'New value';

// var newKey = 'name';
// 4. var iphone11 = {
//        [newKey]: 'Apple iPhone 11'
//    }