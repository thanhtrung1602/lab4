"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      ten_sp: DataTypes.STRING,
      slug: DataTypes.STRING,
      gia: DataTypes.INTEGER,
      gia_km: DataTypes.INTEGER,
      id_loai: DataTypes.STRING,
      dien_thoai: DataTypes.STRING,
      hinh: DataTypes.STRING,
      role: DataTypes.BOOLEAN,
      remember_token: DataTypes.STRING,
      google_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
