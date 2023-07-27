'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Allcode extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            
            Allcode.hasMany(models.Doctor_User, { foreignKey: 'priceId',  })
            Allcode.hasMany(models.Doctor_User, { foreignKey: 'provinceId' })

        }
    };
    Allcode.init(
      {
        keyMap: DataTypes.STRING,
        type: DataTypes.STRING,
        value: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: "Allcode",
      }
    );
    return Allcode;
};