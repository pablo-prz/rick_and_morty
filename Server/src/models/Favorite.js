const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
      },
      name: {
         type: DataTypes.STRING(40),
         allowNull: false,

      },
      status: {
         type: DataTypes.ENUM("Alive", "Dead", "unknown"),
         allowNull: false,
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      gender: {
         type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
         allowNull: false,
      },
      origin: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      Image: {
         type: DataTypes.TEXT,
         allowNull: false,
      }
   }, { timestamps: false });
};
