'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LichChieu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.PhongChieu, {
        foreignKey: 'maPhong',
        as: 'phongChieu'
      });
      this.belongsTo(models.Phim, {
        foreignKey: 'maPhim',
        as: 'phim'
      });
      this.hasMany(models.SuatChieu, {
        foreignKey: 'maLichChieu',
        as: 'suatChieu'
      });
    }
  }
  LichChieu.init({
    maPhong: DataTypes.INTEGER,
    maPhim: DataTypes.INTEGER,
    trangThai: DataTypes.STRING,
    ngayChieu: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'LichChieu',
  });
  return LichChieu;
};