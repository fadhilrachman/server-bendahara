"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pemasukan", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      tanggal: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      total_pemasukan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kategori: {
        type: Sequelize.ENUM,
        values: ["jajan", "kebutuhan", "sedekah"],
        allowNull: false,
      },
      deskripsi: Sequelize.TEXT,
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("pemasukan");
  },
};
