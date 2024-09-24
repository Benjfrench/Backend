const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Workout extends Model {}

Workout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    completionDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    squadId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "workouts",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Workout;
