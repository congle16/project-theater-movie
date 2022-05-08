'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LichChieus', {
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
      maPhim: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Phims',
          key: 'id'
        }
      },
      trangThai: {
        type: Sequelize.STRING
      },
      ngayChieu: {
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
    await queryInterface.dropTable('LichChieus');
  }
};