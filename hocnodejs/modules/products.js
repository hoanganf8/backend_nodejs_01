const Base = require("../core/Base");

class Products extends Base {
  index = (req, res) => {
    const method = req.method;
    if (method === "GET") {
      //Xử lý với GET
      console.log(`Đây là GET`);
      const queryString = req.url.split("?").slice(-1).join(); //Lấy query string
      if (queryString) {
        const search = new URLSearchParams(queryString);
        //Lấy giá trị từng query string theo key
        const keyword = search.get("keyword");
        const category = search.get("category");

        console.log(keyword, category);
      }
    } else if (method === "POST") {
      //Xử lý với POST
      console.log(`Đây là POST`);
    }

    res.end(`<h1>Sản phẩm</h1>`);
  };

  add = (req, res) => {
    const method = req.method;

    if (method === "GET") {
      //Xử lý với GET
      //   console.log(`Đây là GET`);
      this.render(req, res, "product_add");
    } else if (method === "POST") {
      //Xử lý với POST
      //   console.log(`Đây là POST`);

      //Lấy header từ request
      //   console.log(req.headers["user-agent"]);

      req.on("data", (buffer) => {
        const body = buffer.toString();
        const errors = {};
        let name = "";
        let email = "";
        if (body) {
          const bodyObj = new URLSearchParams(body);
          name = bodyObj.get("name");
          email = bodyObj.get("email");

          if (!name) {
            errors.name = "Vui lòng nhập tên";
          }

          if (!email) {
            errors.email = "Vui lòng nhập email";
          }
        }

        // console.log(errors.name, errors.email);

        const msg = Object.keys(errors).length ? "Vui lòng kiểm tra lỗi" : "";

        this.render(req, res, "product_add", {
          "error.name": errors.name ?? "",
          "error.email": errors.email ?? "",
          "old.name": name,
          "old.email": email,
          msg: msg,
        });
        // console.log(errors);
        //Trả về header
        // res.setHeader("f8", "Hello F8");
      });
    }
  };
}

module.exports = new Products();
