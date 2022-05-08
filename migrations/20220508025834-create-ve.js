'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      maSuatChieu: {
        type: Sequelize.INTEGER,
        references: {
          model: 'SuatChieus',
          key: 'id'
        }
      },
      maLoaiVe: {
        type: Sequelize.INTEGER,
        references: {
          model: 'LoaiVes',
          key: 'id'
        }
      },
      maPhong: {
        type: Sequelize.INTEGER,
        references: {
          model: 'PhongChieus',
          key: 'id'
        }
      },
      maGhe: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Ghes',
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
      ngayMua: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Ves');
  }
};