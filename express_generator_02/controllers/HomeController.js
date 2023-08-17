const Course = require("../models/courseModel");

module.exports = {
  index: (req, res) => {
    //Gọi dữ liệu từ model
    const courses = Course.getList();
    console.log(courses);

    res.render("home/index", { courses });
  },

  report: (req, res) => {
    // res.render("home/report", { layout: false });
    res.render("home/report", { layout: "layouts/admin" });
  },
};

/*
Một số vấn đề khi làm việc với layout
- Không muốn sử dụng layout
- Chọn layout khác mặc định
*/
