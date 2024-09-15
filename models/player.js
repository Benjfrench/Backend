const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Player extends Model { }

Player.init({
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
    }},
       {
    sequelize: sequelizeInstance, modelName: 'users', // use lowercase plural format
    timestamps: true, freezeTableName: true
       }
    )
    
    module.exports = Player;