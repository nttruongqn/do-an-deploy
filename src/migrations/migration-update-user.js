"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn("users", "jobDescHTML", {
        type: Sequelize.STRING,
      });
      await queryInterface.addColumn("users", "jobDescMarkdown", {
        type: Sequelize.STRING,
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.removeColumn("users", "jobDescHTML");
      await queryInterface.removeColumn("users", "jobDescMarkdown");
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
};
