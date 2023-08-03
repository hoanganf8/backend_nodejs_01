const fs = require("fs"); //Xử lý file
class Home {
  index = (req, res) => {
    //Xử lý logic

    fs.readFile("./views/home.html", "utf8", (err, data) => {
      res.end(data); //Response Message Body
    });
  };
}

module.exports = new Home();
