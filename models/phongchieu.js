'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhongChieu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Ghe, {
        foreignKey: 'maPhong'
      });
      this.hasMany(models.LichChieu, {
        foreignKey: 'maPhong'
      });
      this.hasMany(models.Ve, {
        foreignKey: 'maPhong'
      });
    }
  }
  PhongChieu.init({
    tenPhong: DataTypes.STRING,
    trangThai: DataTypes.STRING,
    soLuongGhe: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PhongChieu',
  });
  return PhongChieu;
};