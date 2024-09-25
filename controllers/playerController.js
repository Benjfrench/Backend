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
const createPlayer = async (data, res) => {
  try {
    const { firstName, lastName, emailId, password, squadId } = data;

    // Find the squad by squadCode
    const squad = await Models.Squad.findOne({ where: { squadCode: squadId } });

    // If no squad is found, return an error
    if (!squad) {
      return res.status(400).send({ result: 400, error: "Invalid squad code." });
    }

    // Create the player and associate with the found squad's ID
    const newPlayer = await Models.Player.create({
      firstName,
      lastName,
      emailId,
      password,
      squadId: squad.id, // Assign the squad's ID
    });

    // Send success response with the created player
    res.send({ result: 200, data: newPlayer });
  } catch (err) {
    console.log(err);
    res.status(500).send({ result: 500, error: err.message });
  }
};

// Login functionality
const loginPlayer = async (data, res) => {
  try {
    const { emailId, password } = data; // Extract emailId and password from data

    const player = await Models.Player.findOne({ where: { emailId } });
    
    // Check if the player exists and password matches (consider hashing passwords)
    if (!player || player.password !== password) {
      return res.status(401).send({ result: 401, error: 'Invalid credentials' });
    }

    // Send a success response with player information
    res.send({ result: 200, message: 'Login successful', player });
  } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message });
  }
};

module.exports = {
  getPlayers, createPlayer, loginPlayer
}