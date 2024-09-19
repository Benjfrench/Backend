const { DataTypes, Model } = require("sequelize");
 let dbConnect = require("../dbConnect");

 const sequelizeInstance = dbConnect.Sequelize;

 class Coach extends Model { }

 Coach.init({
   id: {
   type: DataTypes.INTEGER, allowNull: false, autoIncrement: 
  true, primaryKey: true
      },
   firstName: {
   type: DataTypes.STRING, allowNull: false, required: true
      },
   lastName: {
   type: DataTypes.STRING, allowNull: false, required: true
      },
   emailId: {
   type: DataTypes.STRING, allowNull: false, required: true, 
  unique: true
      },
   password: {
   type: DataTypes.STRING, allowNull: false, required: true
      },
   squadId: {
      type: DataTypes.INTEGER, allowNull: false, required: true
   }
   },
      {
   sequelize: sequelizeInstance, modelName: 'coaches', // use lowercase plural format
   timestamps: true, freezeTableName: true
      }
   )
   module.exports = Coach;