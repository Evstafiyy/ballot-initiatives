"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Initiatives extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: "userId" });
    }
  }
  Initiatives.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      totalVotes: {
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Initiatives",
    }
  );
  return Initiatives;
};
