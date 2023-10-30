const bcrypt = require("bcrypt");

const model = require("../models/index");
const jwt = require("../utils/jwt");
const User = model.User;

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      res.status(400).json({
        status: "error",
        message: "Authentication Failed",
      });
      return;
    }
    const { password: hash } = user;
    const status = bcrypt.compareSync(password, hash);
    if (!status) {
      res.status(400).json({
        status: "error",
        message: "Authentication Failed",
      });
      return;
    }

    //Tạo accessToken và refreshToken
    const token = jwt.createToken({ userId: user.id });
    const refreshToken = jwt.createRefresh();
    //Lưu refreshToken vào Database
    const updateStatus = await User.update(
      {
        refresh_token: refreshToken,
      },
      {
        where: {
          id: user.id,
        },
      },
    );

    if (!updateStatus) {
      res.status(500).json({
        status: "error",
        message: "Server Error",
      });
      return;
    }

    res.json({
      status: "success",
      accessToken: token,
      refreshToken,
    });
  },

  profile: async (req, res) => {
    const { JWT_SECRET } = process.env;
    const authorization = req.headers["authorization"];
    const token = authorization.replace("Bearer", "").trim();
    try {
      const decoded = jwt.decode(token);

      if (decoded) {
        const { userId } = decoded;
        const user = await User.findOne({
          where: {
            id: userId,
          },
          attributes: ["id", "name", "email", "createdAt", "updatedAt"],
        });
        if (!user) {
          res.json({
            status: "error",
            message: "User not exist",
          });
          return;
        }
        res.json({ status: "success", data: user });
      }
    } catch (e) {
      res.status(401).json({
        status: "error",
        message: "Unauthorize",
      });
    }
  },

  refreshToken: async (req, res) => {
    //Nhận: refreshToken
    const { refreshToken } = req.body;
    if (!refreshToken) {
      res.status(400).json({
        status: "error",
        message: "refreshToken required",
      });
      return;
    }

    try {
      jwt.decode(refreshToken);
      //Verify với Database
      const user = await User.findOne({
        where: {
          refresh_token: refreshToken,
        },
      });

      //Nếu user không tồn tại -> Trả về thông báo lỗi
      if (!user) {
        res.status(401).json({
          status: "error",
          message: "Unauthorize",
        });
        return;
      }
      //Nếu user tồn tại -> Hợp lệ -> Tạo accessToken mới và refreshToken
      const token = jwt.createToken({ userId: user.id });
      const newRefreshToken = jwt.createRefresh();

      //Lưu refreshToken vào Database
      const updateStatus = await User.update(
        {
          refresh_token: refreshToken,
        },
        {
          where: {
            id: user.id,
          },
        },
      );

      if (!updateStatus) {
        res.status(500).json({
          status: "error",
          message: "Server Error",
        });
        return;
      }

      res.json({
        status: "success",
        accessToken: token,
        refreshToken: newRefreshToken,
      });
    } catch (e) {
      res.status(401).json({
        status: "error",
        message: "Unauthorize",
      });
      return;
    }

    //Ra: accessToken mới và refreshToken mới
  },
};

/*
Khi accessToken hết hạn -> Gửi refreshToken lên Server -> Kiểm tra refeshToken hợp lệ
- Vẫn sống
- Tồn tại -> Decode ra userId -> userId khớp với Database
- Kiểm tra refresh tồn tại trong bảng users

Tình huống: khi accessToken được cấp lại -> refreshToken cũng được cấp lại -> Vẫn tồn tại refreshToken cũ hợp lệ

Giải pháp: Khi 1 refresh được tạo -> Lưu lại refresh khớp 1 userId

Khi tạo refresh mới -> xóa refresh cũ

AccessToken: Lưu ở Client
RefreshToken: Lưu ở Client và Server

Xử lý logout

Khi user logout 
-> Thêm accessToken vào Table Blacklist
-> Xóa refreshToken khỏi Database

Khi check authorization -> Kiểm tra token có nằm trong blacklist

Trong table Blacklist -> Thêm field expired lưu thời gian hết hạn của token

1 ngày -> Thêm tính trình chạy tự động để xóa các token đã hết hạn -> Tìm hiểu cronjob
*/
