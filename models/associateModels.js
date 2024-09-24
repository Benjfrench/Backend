
const Workout = require("./workout"); 
const Exercise = require("./exercise")

const associateModels = () => {
    Exercise.belongsTo(Workout, { foreignKey: 'workoutId', as: 'workout' });
    Workout.hasMany(Exercise, { foreignKey: 'workoutId', as: 'exercises' });
  };
  
  module.exports = associateModels;