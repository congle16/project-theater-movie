'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuatChieu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.LichChieu, {
        foreignKey: 'maLichChieu',
        as: 'lichChieu'
      });
      this.hasMany(models.Ve, {
        foreignKey: 'maSuatChieu'
      });
    }
  }
  SuatChieu.init({
    maLichChieu: DataTypes.INTEGER,
    tenSuatChieu: DataTypes.STRING,
    trangThai: DataTypes.STRING,
    timeStart: DataTypes.DATE,
    timeEnd: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SuatChieu',
  });
  return SuatChieu;
};