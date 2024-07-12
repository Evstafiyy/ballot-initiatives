"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Votes extends Model {
    static associate({ User, Initiatives }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsTo(Initiatives, { foreignKey: "initiativeId" });
    }
  }
  Votes.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "cascade",
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
