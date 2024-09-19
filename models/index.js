'use strict'
const Coach = require('./coach');
const Player = require('./player'); //require the model
const Progress = require('./progress');

async function init() {
   await Player.sync(); // sync the model
   await Coach.sync();
   await Progress.sync();
};

init();

module.exports = {
   Player, Coach, Progress // export the model
   // also export any extra models here
};