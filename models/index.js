'use strict';
const dbConnect = require("../dbConnect");
const Player = require('./player'); // Require the Player model
const Coach = require('./coach'); // Require the Coach model
const Progress = require('./progress'); // Require the Progress model
const Workout = require("./workout"); // Require the Workout model
const Exercise = require("./exercise"); // Require the Exercise model
const Squad = require("./squad")

// Define associations
Workout.hasMany(Exercise, {
  foreignKey: 'workoutId', // This should match the foreign key defined in the Exercise model
  as: 'exercises', // Alias for accessing related exercises
});

Exercise.belongsTo(Workout, {
  foreignKey: 'workoutId', // This matches the foreign key in the Exercise model
  as: 'workoutExercise', // Changed alias to avoid conflict
});

// Initialize models
async function init() {
   await Player.sync(); // Sync the Player model
   await Coach.sync(); // Sync the Coach model
   await Progress.sync(); // Sync the Progress model
   await Workout.sync(); // Sync the Workout model
   await Exercise.sync(); // Sync the Exercise model
   await Squad.sync();
}

// Call init function to sync the models
init();

module.exports = {
   Player,
   Coach,
   Progress,
   Workout,
   Exercise,
   Squad,
   // Export any other models as needed
};
