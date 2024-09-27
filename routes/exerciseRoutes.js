const express = require("express");
const router = express.Router();
const { exerciseController } = require("../controllers");

// Create a new exercise
router.post("/", exerciseController.createExercise);

// Get all exercises
router.get("/", exerciseController.getAllExercises);

// Get exercises by workout ID
router.get("/workout/:workoutId", exerciseController.getExercisesByWorkoutId); 

// Get a specific exercise by ID
router.get("/:id", exerciseController.getExerciseById);

// Update an exercise by ID
router.put("/:id", exerciseController.updateExercise);

// Delete an exercise by ID
router.delete("/:id", exerciseController.deleteExercise);

module.exports = router;
