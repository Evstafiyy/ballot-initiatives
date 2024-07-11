"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Initiatives, Votes }) {
      this.hasMany(Initiatives, { foreignKey: "userId" });
      this.hasMany(Votes, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      fullName: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        unique: true,
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
