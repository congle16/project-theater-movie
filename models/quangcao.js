'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuangCao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models,Phims, {
        foreignKey: 'maPhim'
      })
    }
  }
  QuangCao.init({
    maPhim: DataTypes.INTEGER,
    tenQuangCao: DataTypes.STRING,
    timeStart: DataTypes.DATE,
    timeEnd: DataTypes.DATE,
    noiDung: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'QuangCao',
    underscored: true,
  });
  return QuangCao;
};