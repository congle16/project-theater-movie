'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Phims', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenPhim: {
        type: Sequelize.STRING
      },
      noiDungPhim: {
        type: Sequelize.STRING
      },
      daoDien: {
        type: Sequelize.STRING
      },
      nuocSanXuat: {
        type: Sequelize.STRING
      },
      thoiLuong: {
        type: Sequelize.STRING
      },
      trailer: {
        type: Sequelize.STRING
      },
      poster: {
        type: Sequelize.STRING
      },
      trangThai: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Phims');
  }
};