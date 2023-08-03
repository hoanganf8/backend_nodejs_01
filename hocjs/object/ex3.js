const student = {
    firstName: 'A',
    lastName: 'Nguyen Van',
    age: 20,
    address: 'Ha Noi',
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    mother: {
        firstName: 'B',
        lastName: 'Nguyen Thi',
        getFullName: function() {
            console.log(this);
            // return `${this.firstName} ${this.lastName}`;
        },
    }
}

// const fullName = student.getFullName();

// console.log(fullName);

// const motherName = student.mother.getFullName()

const product1 = {
    name: 'Nồi cơm điện',
    price: 1299000,
    priceUnit: 'đ', // đ, usd
    discount: 30,
    discountUnit: '123', // %, price,
    getPrice: function() {
        // Tính ra giá sản phẩm sau giảm giá
        // Expected: 909300
        if (this.discountUnit === '%') {
            return this.price - this.price * this.discount / 100;
        }
        if (this.discountUnit === 'price') {
            return this.price - this.discount;
        }

        return this.price;
    },
    getTextPrice: function() {
        return this.getPrice() + this.priceUnit;
    }
}

const product2 = {
    name: 'Nồi cơm điện',
    price: 1299000,
    priceUnit: 'đ', // đ, usd
    discount: 300000,
    discountUnit: 'price', // %, price,
    getPrice: function() {
        // Tính ra giá sản phẩm sau giảm giá
    }
}