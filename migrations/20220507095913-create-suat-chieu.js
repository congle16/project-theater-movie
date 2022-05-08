'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SuatChieus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      maLichChieu: {
        type: Sequelize.INTEGER,
        references: {
          model: 'LichChieus',
          key: 'id'
        }
      },
      tenSuatChieu: {
        type: Sequelize.STRING
      },
      trangThai: {
        type: Sequelize.STRING
      },
      timeStart: {
        type: Sequelize.DATE
      },
      timeEnd: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('SuatChieus');
  }
};