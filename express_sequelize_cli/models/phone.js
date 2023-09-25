"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Phone.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    }
  }
  Phone.init(
    {
      phone_number: DataTypes.STRING(15),
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Phone",
    },
  );
  return Phone;
};
