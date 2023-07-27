'use strict';
module.exports = {
    up:async (queryInterface, Sequelize) => {
        try {
      await queryInterface.addColumn('doctor_users', 'priceID', {
        type: Sequelize.STRING
      });
      await queryInterface.addColumn('doctor_users', 'provinceID', {
        type: Sequelize.STRING
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
    },
    down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.removeColumn('doctor_users', 'priceID');
      await queryInterface.removeColumn('doctor_users', 'provinceID');
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
    }
};