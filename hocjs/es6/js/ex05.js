class User {
  constructor(name, email) {
    //Phương thức này sẽ chạy đầu tiên khi khởi tạo đối tượng
    console.log("Constructor...");

    //Định nghĩa các thuộc tính
    this.name = name;
    this.email = email;
  }

  //Định nghĩa các phương thức
  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
}

class Auth extends User {
  constructor(name, email) {
    console.log(`Constructor Auth`);
    super(name, email);
    this.isAuth = true;
  }
  getInfo() {
    return `Name: ${this.getName()} - Email: ${this.getEmail()}`;
  }
}

User.prototype.getMessage = function () {
  return "F8";
};

//Khởi tạo đối tượng
// const user = new User("Hoàng An", "hoangan.web@gmail.com");
// console.log(user);
// // console.log(user.name);
// console.log(user.getName());

const auth = new Auth("Hoàng An", "hoangan.web@gmail.com");
console.log(auth.getInfo());
console.log(auth.isAuth);
console.log(auth.getMessage());
