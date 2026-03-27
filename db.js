const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/khalti")
    .then(() => {
      console.log("mongodb connected to database");
    })
    .catch((err) => {
      console.log(" Database connection error:", err);
    });
};

module.exports = connectDB;
