const { DataTypes, Model } = require("sequelize");
 let dbConnect = require("../dbConnect");

 const sequelizeInstance = dbConnect.Sequelize;

 class Progress extends Model { }

 Progress.init({
   id: {
   type: DataTypes.INTEGER, allowNull: false, autoIncrement: 
  true, primaryKey: true
      },
   playerId: {
   type: DataTypes.INTEGER, allowNull: false, required: true
      },
   workoutId: {
   type: DataTypes.INTEGER, allowNull: false, required: true
      },
   completed: {
   type: DataTypes.BOOLEAN, allowNull: false, required: true, 
  unique: true
      },
   completedDate: {
   type: DataTypes.DATE, allowNull: false, required: true
      }},
      {
   sequelize: sequelizeInstance, modelName: 'progress', 
   timestamps: true, freezeTableName: true
      }
   )
   module.exports = Progress;