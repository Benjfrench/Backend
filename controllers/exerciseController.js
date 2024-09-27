const { Exercise } = require("../models");

// Create a new exercise
exports.createExercise = async (req, res) => {
  try {
    const newExercise = await Exercise.create(req.body);
    res.status(201).json(newExercise);
  } catch (error) {
    res.status(500).json({ message: "Error creating exercise", error });
  }
};

// Get all exercises
exports.getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.findAll();
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ message: "Error fetching exercises", error });
  }
};

// Get exercises by workout ID
exports.getExercisesByWorkoutId = async (req, res) => {
  try {
    const exercises = await Exercise.findAll({ where: { workoutId: req.params.workoutId } });
    if (exercises.length === 0) {
      return res.status(404).json({ message: "No exercises found for this workout" });
    }
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ message: "Error fetching exercises by workout ID", error });
  }
};

// Get a specific exercise by ID
exports.getExerciseById = async (req, res) => {
  try {
    const exercise = await Exercise.findByPk(req.params.id);
    if (!exercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }
    res.status(200).json(exercise);
  } catch (error) {
    res.status(500).json({ message: "Error fetching exercise", error });
  }
};

// Update an exercise by ID
exports.updateExercise = async (req, res) => {
  try {
    const [updated] = await Exercise.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedExercise = await Exercise.findByPk(req.params.id);
      return res.status(200).json(updatedExercise);
    }
    throw new Error("Exercise not found");
  } catch (error) {
    res.status(500).json({ message: "Error updating exercise", error });
  }
};

// Delete an exercise by ID
exports.deleteExercise = async (req, res) => {
  try {
    const deleted = await Exercise.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      return res.status(200).json({ message: "Exercise deleted" });
    }
    throw new Error("Exercise not found");
  } catch (error) {
    res.status(500).json({ message: "Error deleting exercise", error });
  }
};