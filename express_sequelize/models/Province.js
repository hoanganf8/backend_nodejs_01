//Province Model
const { DataTypes } = require("sequelize");

const Province = async () => {
  const sequelize = await require("../utils/db");

  return sequelize.define(
    "Province",
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: "province",
    },
  );
};

module.exports = Province();
