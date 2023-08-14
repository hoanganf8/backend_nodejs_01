module.exports = {
  index: (req, res) => {
    // console.log(req.query);
    const { keyword, category } = req.query;
    console.log(`keyword = ${keyword}`);
    console.log(`category = ${category}`);
    return res.send("<h1>Sản phẩm</h1>");
  },

  get: (req, res) => {
    const { slug } = req.params;
    return res.send(`<h1>Thông tin sản phẩm: ${slug}</h1>`);
  },

  add: (req, res) => {
    // const method = req.method;
    // console.log(method);

    const { msg } = req.session;

    delete req.session.msg; //xóa session msg

    //Việc session chỉ tồn tại 1 lần => gọi là flash session
    //Tìm hiểu thêm thư viện connect-flash kết hợp với express-session

    // console.log(msg);

    //Nhận thông báo từ post gửi sang
    return res.render("products/add", { msg });
  },

  handleAdd: (req, res) => {
    const { name, price } = req.body;
    // console.log(name, price);
    // console.log(req.headers["user-agent"]);
    // console.log(req.get("user-agent"));
    // res.header("f8", "Hoàng An F8");
    // res.set("F8", "Hoàng An F8");
    // res.send("success");

    //set session
    req.session.msg = "Vui lòng nhập đầy đủ thông tin";

    res.redirect("/san-pham/them");
  },
};
