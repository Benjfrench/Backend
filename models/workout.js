const { DataTypes, Model } = require("sequelize");
 let dbConnect = require("../dbConnect");

 const sequelizeInstance = dbConnect.Sequelize;

 class Workout extends Model { }

 Workout.init({
   id: {
   type: DataTypes.INTEGER, allowNull: false, autoIncrement: 
  true, primaryKey: true
      },
   date: {
   type: DataTypes.DATE, allowNull: false, required: true
      },
   squadId: {
   type: DataTypes.INTEGER, allowNull: false, required: true
      },
   description: {
   type: DataTypes.STRING, allowNull: false, required: true, 
  unique: true
      }},
      {
   sequelize: sequelizeInstance, modelName: 'workouts', // use lowercase plural format
   timestamps: true, freezeTableName: true
      }
   )
   module.exports = Workout;