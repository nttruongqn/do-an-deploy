'use strict';
module.exports = {
    up:async (queryInterface, Sequelize) => {
        try {
      await queryInterface.addColumn('feedbacks', 'age', {
        type: Sequelize.INTEGER
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
    },
    down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.removeColumn('feedbacks', 'age');
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
    }
};