const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");

app.use(cors({
  origin: 'https://localhost:5173',
  methods: 'GET, POST',
  credentials: true
}));

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

let playerRoutes = require("./routes/playerRoutes");
app.use("/api/players", playerRoutes);


dbConnect.Sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database & tables updated!');
  })
  .catch((err) => console.error('Error syncing with the database:', err));


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
