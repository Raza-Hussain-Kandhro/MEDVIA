const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const databaseInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/BIOVA_SURGICALS`
    );
    console.log(
      `MongoDB Connected successfully at HOST: ${databaseInstance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
