'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ghes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      maPhong: {
        type: Sequelize.INTEGER,
        references: {
          model: 'PhongChieus',
          key: 'id'
        }
      },
      trangThai: {
        type: Sequelize.STRING
      },
      vitriDay: {
        type: Sequelize.STRING
      },
      vitriCot: {
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
    await queryInterface.dropTable('Ghes');
  }
};