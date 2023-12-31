"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      desc: {
        type: Sequelize.TEXT,
      },
      descMarkdown: {
        type: Sequelize.TEXT,
      },
      descHTML: {
        type: Sequelize.TEXT,
      },
      contentMarkdown: {
        type: Sequelize.TEXT,
      },
      contentHTML: {
        type: Sequelize.TEXT,
      },
      forDoctorId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      forSpecializationId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      forClinicId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      writerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Posts");
  },
};
