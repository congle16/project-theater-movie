'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NhanVien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.ChucVu, {
        foreignKey: 'maCV',
        as: 'chucVu'
      });
      this.hasOne(models.User, {
        foreignKey: 'maUser'
      });
    }
  }
  NhanVien.init({
    maCV: DataTypes.INTEGER,
    maUser: DataTypes.INTEGER,
    tenNV: DataTypes.STRING,
    CMND: DataTypes.STRING,
    ngaySinh: DataTypes.STRING,
    queQuan: DataTypes.STRING,
    gioiTinh: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NhanVien',
  });
  return NhanVien;
};