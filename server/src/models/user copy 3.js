"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      email_verified_at: DataTypes.DATE,
      password: DataTypes.STRING,
      dia_chi: DataTypes.STRING,
      dien_thoai: DataTypes.STRING,
      hinh: DataTypes.STRING,
      role: DataTypes.BOOLEAN,
      remember_token: DataTypes.STRING,
      google_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
