const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// Route to update progress completion status
router.put("/update/:progressId", (req, res) => {
  Controllers.progressController.updateProgress(req.params.progressId, res);
});

module.exports = router;
