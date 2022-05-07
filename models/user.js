'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.NhanVien, {
        foreignKey: 'maUser',
        as: 'nhanVien'
        });
      this.hasOne(models.KhachHang, {
          foreignKey: 'maUser',
          as: 'khachHang'
        });
    }
  }
  User.init({
    type: DataTypes.STRING,
    trangThai: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};