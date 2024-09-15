"use strict"
const Player = require("./player"); //require the model

async function init() {
  await Player.sync(); // sync the model
  // also sync any extra models here
}

init();

module.exports = {
  Player, // export the model
  // also export any extra models here
};
