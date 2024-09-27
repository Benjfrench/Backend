const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');

// Create a new workout
router.post('/', workoutController.createWorkout);

// Get all workouts
router.get('/', workoutController.getWorkouts);


// Get workouts with completion date within the next 28 days
router.get('/upcoming', workoutController.getUpcomingWorkouts);


// Get workouts by completion date or date range
router.get('/byDate/:date', workoutController.getWorkoutsByDate);

// Get a specific workout by ID
router.get('/:id', workoutController.getWorkoutById);

router.get('/test', (req, res) => {
    res.send('Test route working!');
});

// Update a workout by ID
router.put('/:id', workoutController.updateWorkout);

// Delete a workout by ID
router.delete('/:id', workoutController.deleteWorkout);

module.exports = router;
