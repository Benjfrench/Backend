const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const Workout = require("./workout"); // Ensure Workout is imported

const sequelizeInstance = dbConnect.Sequelize;

class Exercise extends Model {}

Exercise.init(
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
    },
    workoutId: {
      type: DataTypes.INTEGER,
      references: {
        model: "workouts", // Make sure this matches your model name
        key: "id",
      },
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    sets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rest: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "exercises",
    timestamps: true,
    freezeTableName: true,
  }
);

// Define association
Exercise.belongsTo(Workout, {
  foreignKey: "workoutId",
  as: "workout",
});

// Export Exercise model
module.exports = Exercise;