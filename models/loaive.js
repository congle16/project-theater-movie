'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LoaiVe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Ve, {
        foreignKey: 'maLoaiVe',
        as: 've'
      });
    }
  }
  LoaiVe.init({
    tenLoaiVe: DataTypes.STRING,
    trangThai: DataTypes.STRING,
    giaVe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LoaiVe',
  });
  return LoaiVe;
};