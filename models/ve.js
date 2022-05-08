'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ve extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.SuatChieu, {
        foreignKey: 'maSuatChieu',
        as: 'suatChieu'
      });
      this.belongsTo(models.PhongChieu, {
        foreignKey: 'maPhong',
        as: 'phongChieu'
      });
      this.belongsTo(models.Phim, {
        foreignKey: 'maPhim',
        as: 'phim'
      });
      this.belongsTo(models.LoaiVe, {
        foreignKey: 'maLoaiVe',
        as: 'loaiVe'
      });
      this.belongsTo(models.Ghe, {
        foreignKey: 'maGhe',
        as: 'ghe'
      });
    }
  }
  Ve.init({
    maSuatChieu: DataTypes.INTEGER,
    maLoaiVe: DataTypes.INTEGER,
    maPhong: DataTypes.INTEGER,
    maGhe: DataTypes.INTEGER,
    maPhim: DataTypes.INTEGER,
    ngayMua: DataTypes.DATE,
    trangThai: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ve',
  });
  return Ve;
};