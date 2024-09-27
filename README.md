# Backend API for Sports Team Management

This repository contains the backend API for a sports team management application, allowing coaches and athletes to manage workouts and exercises. The API is built using Express.js and Sequelize, connected to a MySQL database.

## Table of Contents

- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Players](#players)
  - [Workouts](#workouts)
  - [Exercises](#exercises)
- [Database Connection](#database-connection)

## Technologies

- Node.js
- Express.js
- Sequelize (ORM)
- MySQL
- dotenv (for environment variables)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Benjfrench/Backend.git
2. Install dependencies:
    npm install
3. Configure .env
    Configure the env file for your local environment
4. Start the server
    npm run start

## Usage
The API is accessible at http://localhost:8081/api. It is hosted locally and designed to support a website called TeamTrainer.

## API Endpoints

Specific endpoints outline below:

## Players

Get all players

GET /api/users
Response: List of all players.
Create a new player

POST /api/users/create
Request Body:
{
  "firstName": "John",
  "lastName": "Doe",
  "emailId": "john.doe@example.com",
  "password": "yourpassword",
  "squadId": "squad_code"
}
Response: Newly created player details.

Login a player

POST /api/users/login
Request Body:
{
  "emailId": "john.doe@example.com",
  "password": "yourpassword"
}
Response: Login success message and player details.

## Workouts
Create a new workout

POST /api/workouts

Request Body:
{
  "name": "Workout Name",
  "description": "Workout Description",
  "completionDate": "YYYY-MM-DD",
  "squadId": "squad_code",
  "exercises": [
    {
      "name": "Exercise Name",
      "reps": 10,
      "sets": 3
    }
  ]
}

Response: Newly created workout details.

Get all workouts

GET /api/workouts
Response: List of all workouts.
Get a specific workout by ID

GET /api/workouts/:id
Response: Details of the specified workout.
Get upcoming workouts (within the next 28 days)

GET /api/workouts/upcoming
Response: List of upcoming workouts.
Get workouts by completion date

GET /api/workouts/byDate/:date
Response: List of workouts for the specified date.
Update a workout by ID

PUT /api/workouts/:id
Request Body: Same structure as creating a workout.
Response: Updated workout details.
Delete a workout by ID

DELETE /api/workouts/:id
Response: Confirmation message of deletion.

## Exercises
Create a new exercise

POST /api/exercises
Request Body:
{
  "name": "Exercise Name",
  "description": "Exercise Description",
  "workoutId": "workout_id"
}
Response: Newly created exercise details.

Get all exercises

GET /api/exercises
Response: List of all exercises.
Get exercises by workout ID

GET /api/exercises/workout/:workoutId
Response: List of exercises associated with the specified workout.
Get a specific exercise by ID

GET /api/exercises/:id
Response: Details of the specified exercise.
Update an exercise by ID

PUT /api/exercises/:id
Request Body: Similar structure to create an exercise.
Response: Updated exercise details.
Delete an exercise by ID

DELETE /api/exercises/:id
Response: Confirmation message of deletion.

## Database Connection

The database connection is established using Sequelize. Ensure your MySQL server is running and the credentials are correctly set in the .env file.

