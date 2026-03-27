const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db");

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
