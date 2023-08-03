const Base = require("../core/Base");

class Home extends Base {
  //action
  index = (req, res) => {
    //Xử lý logic

    const title = "F8 - Fullstack";
    const content = "Tôi là Hoàng An";

    const products = `
    <ul>
      <li>Sản phẩm 1</li>
      <li>Sản phẩm 2</li>
      <li>Sản phẩm 3</li>
    </ul>
    `;

    this.render(req, res, "home", { title, content, products }); //load view
  };
}

module.exports = new Home();
