# Backend API for Sports Team Management

This repository contains the backend API for a sports team management application called TeamTrainer, allowing coaches and athletes to manage workouts and exercises. Coaches can create workouts using a range of exercises drawn from a third party API found at https://api.api-ninjas.com/v1/exercises. The API is built using Express.js and Sequelize, connected to a MySQL database. The associated front end application can be found and accessed at the following public git repo: https://github.com/Benjfrench/capstoneApp.git. 

## Table of Contents
 
-[Technologies](#technologies)
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
To get started, clone the repository and install all relevant packages. 
1. git clone https://github.com/Benjfrench/Backend.git

2. Install dependencies using the following terminal commands:
    npm install express
    npm install sequelize
    npm install cors
    npm install dotenv
    npm install mysql12

3. Make sure mysql workbench is downloaded: https://dev.mysql.com/downloads/workbench/. Create a database using mysql and connect to the backend project using .env file.

4. Configure your .env file by making sure all fields match the fields you are using on mysql. This includes DB_NAME, DB_USER (should default to root), DB_PASSWORD, DB_HOST, DB_PORT and PORT. Current .env file contains placeholder password. Make sure to create a .gitignore file and include the .env file if pushing to a public repo, to protect the security of the password.


5. Make sure cors is configured correctly when setting up with front end, to ensure communication between both servers. 

6. Start the server
    npm run start

7. Once server is started, double check which port the server is running on. This should match your PORT on your .env file. 


## Usage
For front end functionality, clone the following github repo found here: https://github.com/Benjfrench/capstoneApp.git and follow the instructions in the attached readme file.

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

