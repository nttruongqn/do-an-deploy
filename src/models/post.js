'use strict';
module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
      "Post",
      {
        title: DataTypes.STRING,
        desc: DataTypes.TEXT,
        descMarkdown: DataTypes.TEXT,
        descHTML: DataTypes.TEXT,
        contentMarkdown: DataTypes.TEXT,
        contentHTML: DataTypes.TEXT,
        forDoctorId: DataTypes.INTEGER,
        forSpecializationId: DataTypes.INTEGER,
        forClinicId: DataTypes.INTEGER,
        writerId: DataTypes.INTEGER,
        image: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
      },
      {}
    );
    Post.associate = function(models) {
        models.Post.belongsTo(models.User, { foreignKey: 'forDoctorId' });
        models.Post.belongsTo(models.Specialization, { foreignKey: 'forSpecializationId' });
        models.Post.belongsTo(models.Clinic, { foreignKey: 'forClinicId' });
    };
    return Post;
};