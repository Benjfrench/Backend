const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Squad extends Model {}

Squad.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    squadName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coachName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    squadCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "squad", 
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Squad;
