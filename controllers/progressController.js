"use strict";

const Models = require("../models");

// Update progress to mark as completed and set completedDate
const updateProgress = async (progressId, res) => {
  try {
    // Find the progress entry by its ID
    const progress = await Models.Progress.findByPk(progressId);

    if (!progress) {
      return res.status(404).send({ result: 404, message: "Progress not found" });
    }

    // Update completed status and set completedDate if not already completed
    if (!progress.completed) {
      progress.completed = true;
      progress.completedDate = new Date();
      await progress.save();  // Save the changes
    }

    res.send({
      result: 200,
      message: "Workout marked as completed",
      data: progress,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ result: 500, error: err.message });
  }
};

module.exports = {
  updateProgress,
};
