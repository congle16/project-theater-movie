'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChucVu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.NhanVien, {
        foreignKey: 'maCV',
        as: 'nhanViens'
      });
      this.hasOne(models.NhanVien, {
        foreignKey: 'maCV',
        as: 'nhanVien'
      });
    }
  }
  ChucVu.init({
    tenCV: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ChucVu',
  });
  return ChucVu;
};