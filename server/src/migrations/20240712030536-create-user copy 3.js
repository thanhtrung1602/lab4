"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      email_verified_at: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      dia_chi: {
        type: Sequelize.STRING,
      },
      dien_thoai: {
        type: Sequelize.STRING,
      },
      hinh: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.BOOLEAN,
      },
      hinh: {
        type: Sequelize.STRING,
      },
      remember_token: {
        type: Sequelize.STRING,
      },
      google_id: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
