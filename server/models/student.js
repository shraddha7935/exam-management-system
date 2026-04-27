const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  rollNo: Number,
  className: String,
  email: String,
  password: String
});

module.exports = mongoose.model("Student", studentSchema);