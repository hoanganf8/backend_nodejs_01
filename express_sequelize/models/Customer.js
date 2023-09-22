//Customer Model
const { DataTypes } = require("sequelize");

const Customer = async () => {
  const sequelize = await require("../utils/db");

  return sequelize.define(
    "Customer",
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },

      email: {
        type: DataTypes.STRING,
      },

      password: {
        type: DataTypes.STRING,
      },

      status: {
        type: DataTypes.NUMBER,
      },

      province_id: {
        type: DataTypes.NUMBER,
      },

      created_at: {
        type: DataTypes.DATE,
      },

      updated_at: {
        type: DataTypes.DATE,
      },

      deleted_at: {
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: true,
      tableName: "customers",
      paranoid: true,
      deletedAt: "deleted_at",
      updatedAt: "updated_at",
      createdAt: "created_at",
    },
  );
};

module.exports = Customer();

//Convert từ Model Name sang TableName
//Category => Categories
//Customer => Customers

//Nguyên tắc khi đặt tên Model:
/*
Tên file Model trùng tên Model
Dùng PascalCase để đặt tên
Tên Model trùng với tên Table trong Database (Dùng số ít)
1 file model chỉ làm việc 1 table

Để kích hoạt xóa mềm
- paranoid: true
- timestamps: true
- Khai báo deletedAt vào danh sách attribute

Nếu muốn xóa vĩnh viễn, thêm force: true ở hàm destroy

Lưu ý: Nếu các trường: createdAt, updatedAt, deletedAt trong database không giống các quy tắc của sequelize -> Cần đổi tên trong Database hoặc khai báo lại trong Model
*/
