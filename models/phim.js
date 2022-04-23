'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phim extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Phim.init({
    tenPhim: DataTypes.STRING,
    noiDungPhim: DataTypes.STRING,
    daoDien: DataTypes.STRING,
    nuocSanXuat: DataTypes.STRING,
    thoiLuong: DataTypes.STRING,
    trailer: DataTypes.STRING,
    poster: DataTypes.STRING,
    trangThai: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Phim'
  });
  return Phim;
};