"use strict";

const sequelize = require("../dbConnect")
const Models = require("../models");

// finds all users in DB, then sends array as response
const getPlayers = (res) => {
 Models.Player.findAll({}).then(data => {
     res.send({result: 200 , data: data});
 }).catch(err => {
    console.log(err);
    res.send({ result: 500, error: err.message });
 })
}

// uses JSON from request body to create new user in DB
const createPlayer = (data, res) => {
 Models.Player.create(data).then(data => {
     res.send({ result: 200 , data: data});
 }).catch(err => {
    console.log(err);
    res.send({ result: 500, error: err.message });
 })
}

module.exports = {
  getPlayers, createPlayer
}