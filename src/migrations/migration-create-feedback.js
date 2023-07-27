'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Feedbacks", {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          name: {
            type: Sequelize.STRING,
          },
          avatar: {
            type: Sequelize.STRING,
          },
          address: {
            type: Sequelize.STRING,
          },
          content: {
            type: Sequelize.TEXT,
          },
          status: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
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
        return queryInterface.dropTable("Feedbacks");
    }
};
