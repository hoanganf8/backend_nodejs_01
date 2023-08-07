const fs = require("fs"); //Xử lý file
class Base {
  render = (req, res, path, data = {}) => {
    fs.readFile(`./views/${path}.html`, "utf8", (err, viewContent) => {
      // viewContent = viewContent.replaceAll("{title}", data.title);

      const result = viewContent.match(/{.+?}/g);

      if (result?.length) {
        for (let i = 0; i < result.length; i++) {
          const item = result[i];
          const itemKey = item.replaceAll("{", "").replaceAll("}", "");
          viewContent = viewContent.replaceAll(item, data[itemKey] ?? "");
        }
      }

      res.end(viewContent); //Response Message Body
    });
  };
}

module.exports = Base;

//=> Template Engine
