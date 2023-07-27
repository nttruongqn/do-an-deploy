'use strict';
module.exports = (sequelize, DataTypes) => {
    const Feedback = sequelize.define('Feedback', {
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,
        avatar: DataTypes.STRING,
        address: DataTypes.STRING,
        content: DataTypes.TEXT,
        status: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
    }, {});
   return Feedback;
};