"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Votes extends Model {
    static associate({ User, Initiative }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsTo(Initiative, { foreignKey: "initiativeId" });
    }
  }
  Votes.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      initiativeId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      vote: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Votes",
    }
  );
  return Votes;
};
