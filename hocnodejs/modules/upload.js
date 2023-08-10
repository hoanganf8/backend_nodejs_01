const formidable = require("formidable");

const fs = require("fs");

const Base = require("../core/Base");

class Upload extends Base {
  showForm = (req, res) => {
    this.render(req, res, "upload");
  };

  handleUload = async (req, res) => {
    const form = new formidable.IncomingForm(); //Tạo object form để đọc file

    //Chọn thư mục uploads
    // form.uploadDir = "./public/uploads";

    //Cho phép phần mở rộng
    form.keepExtensions = true;

    const [fields, files] = await form.parse(req);

    console.log(files);

    //Lấy tên file
    const fileName = files.image[0].originalFilename;

    //Đổi tên file
    const error = fs.cpSync(
      files.image[0].filepath,
      "./public/uploads/" + fileName,
    );

    let msg,
      html = "";

    if (!error) {
      msg = "Upload thành công";
      const image = fs.readFileSync("./public/uploads/" + fileName); //Đọc file ảnh

      const buffer = new Buffer.from(image);
      //Chuyển thành buffer

      //Chuyển buffer thành base64
      const imageBase64 = buffer.toString("base64");

      html = `<img width="300" src="data:${files.image[0].mimetype};base64, ${imageBase64}" />`;
    } else {
      msg = "Upload thất bại";
    }

    // console.log(form);
    res.end(msg + html);
  };
}

module.exports = new Upload();

/*
Chú ý khi xây dựng chức năng upload file

1. Check kiểu file

2. Check dung lượng cho phép
*/
