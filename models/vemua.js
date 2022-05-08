'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VeMua extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'maUser',
        as: 'user'
      });
      this.belongsTo(models.Ve, {
        foreignKey: 'maVe',
        as: 've'
      }); 
    }
  }
  VeMua.init({
    maUser: DataTypes.INTEGER,
    maVe: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'VeMua',
  });
  return VeMua;
};