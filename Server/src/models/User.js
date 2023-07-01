const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
   sequelize.define(
      "User",
      {
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
         },
         email: {
            type: DataTypes.STRING(60),
            allowNull: false,
            unique: true,
         },
         password: {
            type: DataTypes.TEXT,
            allowNull: false,
         },
      },
      { timestamps: false }
   );
};
