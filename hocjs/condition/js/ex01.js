//Câu lệnh rẽ nhánh
/*
1.if else
if (condition) {
    //body
}

if (condition) {
    //
} else {
    //
}

if (condition) {
    //
} else if (condition) {
    //
} else if (condition) {
    //
} else if (condition) {
    //
} else {

}

if (condition) {
    if (condition) {
        //body
    } else {
        //body
    }
} else {
    //body
}

switch case
*/

var age = 18;
if (age >= 18) {
    console.log('Đủ tuổi');
} else {
    console.log('Chưa đủ tuổi');
}

var number = 6;
if (number < 0) {
    console.log('Số âm');
} else if (number >= 0 && number < 5) {
    console.log('Số nhỏ');
} else if (number >= 5 && number < 10) {
    console.log('Số trung bình');
} else {
    console.log('Số lớn');
}

var email = '', password = '';

if (email === '' || password === '') {
    if (email === '') {
        console.log('Vui lòng nhập email');
    } else {
        console.log('Vui lòng nhập mật khẩu');
    }
} else {
    console.log('Thành công');
}

/*
Tính lương thực nhận

Input: Biến luongcoban, thue

Output: Tính lương thực nhận

Công thức

- Lương <= 5tr => Thuế = 5%
- Lương >5tr và <=10tr => Thuế = 7%
- Lương trên 10tr => Thuế = 10%

Lương thực nhận = lương cơ bản - thuế
*/

var income, tax, salary;

salary = 5000000;

if (salary > 0) {
    if (salary <= 5000000) {
        tax = 5;
    } else if (salary > 5000000 && salary <= 10000000) {
        tax = 7;
    } else {
        tax = 10;
    }

    //Tính thu nhập
    income = salary - tax * salary / 100;

    console.log(`Thu nhập thực nhận = ${income}`);
} else {
    console.log(`Không có lương`);
}

//switch case
/*
- Chỉ chấp nhận biểu thức logic (===)
- Áp dụng khi có quá nhiều nhánh, nhiều điều kiện OR
*/

var action = 'add';

// switch (action) {
//     case 'create': 
//     case 'add':
//     case 'insert':    
//         console.log(`Thêm`);
//         break;    

//     case 'update':
//     case 'edit':    
//         console.log(`Sửa`);
//         break; 
    
//     case 'delete':
//     case 'destroy':
//     case 'remove':        
//         console.log(`Xóa`);
//         break; 

//     default:
//         console.log(`Xem`);
//         break;
// }

if (action === 'create' || action === 'add' || action === 'insert') {
    console.log(`Thêm`);
} else if (action === 'edit' || action === 'update') {
    console.log(`Sửa`);
} else if (action === 'delete' || action === 'remove' || action === 'destroy') {
    console.log(`Xóa`);
} else {
    console.log(`Xem`);
}

//Bài tập: Cho trước 1 tháng, năm => hiển thị xem tháng đó có bao nhiêu ngày?

/*
Tháng 31 ngày: 1, 3, 5, 7, 8, 10, 12
Tháng 30 ngày: 4, 6, 9, 11
Tháng 28, 29 ngày: 
+ 28 ngày: năm không chia hết cho 4
+ 29 ngày: năm chia hết cho 4

Yêu cầu ràng buộc: năm và tháng phải hợp lệ
- Số nguyên
- Tháng từ 1 đến 12


*/

var month = 10;
var year = 2023;
var days; 

if (month % 1 === 0 && year % 1 === 0 && month >= 1 && month <= 12) {
    // console.log(`Thỏa mãn`);
    switch (month) {
        case 2: 
            //if else
            if (year % 4 === 0) {
                days = 29;
            } else {
                days = 28;
            }
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        
        default:
            days = 31;
            break;    
    }

    if (days) {
        console.log(`Tháng ${month} trong năm ${year} có ${days} ngày`);
    }
}else{
    console.log(`Dữ liệu không hợp lệ`);
}

var a = 10.2;
// if (a === (a - (a % 1))) {
//     console.log(`Số nguyên`);
// } else {
//     console.log(`Không phải số nguyên`);
// }

if (Number.isInteger(a)) {
    console.log(`Số nguyên`)
} else {
    console.log(`Không phải số nguyên`);
}

if (a === parseInt(a)) {
    console.log(`Số nguyên`)
} else {
    console.log(`Không phải số nguyên`);
}

//tìm hiểu vòng lặp: for, while, do while