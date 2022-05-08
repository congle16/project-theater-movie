'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ghe extends Model {
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
      this.hasOne(models.Ve, {
        foreignKey: 'maGhe',
        as: 've'
      });
    }
  }
  Ghe.init({
    maPhong: DataTypes.INTEGER,
    trangThai: DataTypes.STRING,
    vitriDay: DataTypes.STRING,
    vitriCot: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ghe',
  });
  return Ghe;
};