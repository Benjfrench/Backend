const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/", (req, res) => {
  Controllers.playerController.getPlayers(res);
});

// matches POST requests sent to /api/users/create
router.post("/create", (req, res) => {
  Controllers.playerController.createPlayer(req.body, res);
});

router.post("/login", (req,res)=>{
  Controllers.playerController.loginPlayer(req.body, res);
});

module.exports = router;
