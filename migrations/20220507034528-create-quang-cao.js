'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('QuangCaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      maPhim: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Phims',
          key: 'id'
        }
      },
      tenQuangCao: {
        type: Sequelize.STRING
      },
      timeStart: {
        type: Sequelize.DATE
      },
      timeEnd: {
        type: Sequelize.DATE
      },
      noiDung: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('QuangCaos');
  }
};