'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KhachHang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.User, {
        foreignKey: 'maUser'
      });
    }
  }
  KhachHang.init({
    tenKH: DataTypes.STRING,
    maUser: DataTypes.INTEGER,
    gioiTinh: DataTypes.STRING,
    CMND: DataTypes.STRING,
    SDT: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'KhachHang',
  });
  return KhachHang;
};