"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Patients", "isTakeCare");
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Patiens","isTakeCare");
  },
};
