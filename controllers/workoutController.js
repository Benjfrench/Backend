const {Workout, Exercise} = require('../models');
const { Op } = require('sequelize')


// Create a new workout
exports.createWorkout = async (req, res) => {
    try {
        const { name, description, dateCreated = new Date(), completionDate, squadId, exercises } = req.body;
        
        // Create the workout first
        const newWorkout = await Workout.create({ name, description, dateCreated, completionDate, squadId });
        
        // If exercises are provided, create them associated with the workout
        if (exercises && exercises.length > 0) {
            const workoutId = newWorkout.id;  // Get the new workout's id

            // Map through exercises array and create each exercise, linking it to the workout
            const exercisePromises = exercises.map(exercise => {
                return Exercise.create({
                    ...exercise,
                    workoutId: workoutId,  // Associate exercise with this workout
                    dateCreated: new Date(), // You can handle default values like this
                });
            });

            // Wait for all exercises to be created
            await Promise.all(exercisePromises);
        }

        res.status(201).json(newWorkout);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: 'Failed to create workout with exercises' });
    }
};


// Get all workouts
exports.getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.findAll();
        res.status(200).json(workouts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve workouts' });
    }
};

// Get a specific workout by ID
exports.getWorkoutById = async (req, res) => {
    console.log('workoutbyId')
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

exports.getUpcomingWorkouts = async (req, res) => {
    try {
        const today = new Date();
        const fourWeeksLater = new Date(today);
        fourWeeksLater.setDate(today.getDate() + 28); // Add 28 days to today's date

        const upcomingWorkouts = await Workout.findAll({
            where: {
                completionDate: {
                    [Op.between]: [today, fourWeeksLater], // Find workouts between today and 28 days later
                },
            },
            order: [['completionDate', 'ASC']], // Sort by the soonest completionDate
        });

        if (!upcomingWorkouts.length) {
            return res.status(404).json({ message: 'No upcoming workouts found.' });
        }

        res.status(200).json(upcomingWorkouts);
    } catch (error) {
        console.error('Error fetching upcoming workouts:', error);
        res.status(500).json({ message: 'Server error fetching upcoming workouts', error });
    }
};

exports.getWorkoutsByDate = async (req, res) => {
    const {date} = req.params;
    console.log('test', date, req.params)
    try {
        // Fetch workouts by date from the database
        const workouts = await Workout.findAll({ where: { completionDate: date } });
        if (!workouts.length) {
            return res.status(404).json({ message: 'No workouts found for this date.' });
        }
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching workouts', error });
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

