'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TheLoaiPhim extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Phim, {
        foreignKey: 'maPhim'
        })
    }
  }
  TheLoaiPhim.init({
    trangThai: DataTypes.STRING,
    tenTheLoai: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TheLoaiPhim',
  });
  return TheLoaiPhim;
};