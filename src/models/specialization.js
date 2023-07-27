"use strict";
module.exports = (sequelize, DataTypes) => {
  const Specialization = sequelize.define(
    "Specialization",
    {
      name: DataTypes.STRING,
      introductionHTML: DataTypes.TEXT,
      introductionMarkdown: DataTypes.TEXT,
      image: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
    },
    {}
  );
  Specialization.associate = function (models) {
    models.Specialization.hasOne(models.Post);
    models.Specialization.hasOne(models.Doctor_User, {
              foreignKey: "specializationId",
            });

  };
  
  return Specialization;
};
