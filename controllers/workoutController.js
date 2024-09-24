const Workout = require('../models/workout');

// Create a new workout
exports.createWorkout = async (req, res) => {
    try {
        const { name, description, dateCreated = new Date(), completionDate, squadId } = req.body;
        const newWorkout = await Workout.create({ name, description, dateCreated, completionDate, squadId });
        res.status(201).json(newWorkout);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: 'Failed to create workout' });
    }
};


// Get all workouts
exports.getAllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.findAll();
        res.status(200).json(workouts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve workouts' });
    }
};

// Get a specific workout by ID
exports.getWorkoutById = async (req, res) => {
    try {
        const workout = await Workout.findByPk(req.params.id);
        if (workout) {
            res.status(200).json(workout);
        } else {
            res.status(404).json({ error: 'Workout not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve workout' });
    }
};

// Update a workout by ID
exports.updateWorkout = async (req, res) => {
    try {
        const { name, description, dateCreated, completionDate, squadId } = req.body;
        const workout = await Workout.findByPk(req.params.id);
        if (workout) {
            workout.name = name;
            workout.description = description;
            workout.dateCreated = dateCreated;  // If you want to update dateCreated
            workout.completionDate = completionDate;  // If you want to update completionDate
            workout.squadId = squadId;  // If you want to update squadId
            await workout.save();
            res.status(200).json(workout);
        } else {
            res.status(404).json({ error: 'Workout not found' });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: 'Failed to update workout' });
    }
};


// Delete a workout by ID
exports.deleteWorkout = async (req, res) => {
    try {
        const workout = await Workout.findByPk(req.params.id);
        if (workout) {
            await workout.destroy();
            res.status(200).json({ message: 'Workout deleted successfully' });
        } else {
            res.status(404).json({ error: 'Workout not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete workout' });
    }
};