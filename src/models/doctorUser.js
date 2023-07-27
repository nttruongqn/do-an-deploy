'use strict';
module.exports = (sequelize, DataTypes) => {
    const Doctor_User = sequelize.define(
      "Doctor_User",
      {
        doctorId: DataTypes.INTEGER,
        clinicId: DataTypes.INTEGER,
        specializationId: DataTypes.INTEGER,
        priceID: DataTypes.STRING,
        provinceID: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
      },
      {}
    );
    Doctor_User.associate = function(models) {
        models.Doctor_User.belongsTo(models.User, { foreignKey: 'doctorId' });
        models.Doctor_User.belongsTo(models.Clinic, { foreignKey: "clinicId" });
        models.Doctor_User.belongsTo(models.Specialization, {
           foreignKey: "specializationId",
         });
        models.Doctor_User.belongsTo(models.Allcode, {
           foreignKey: "priceId",
           targetKey: "keyMap",
           as: "priceTypeData",
         });
         models.Doctor_User.belongsTo(models.Allcode, {
           foreignKey: "provinceId",
           targetKey: "keyMap",
           as: "provinceTypeData",
         });
    };     
    return Doctor_User;
};
