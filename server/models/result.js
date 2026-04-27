const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  studentName: String,
  className: String,   // ✅ ADD
  rollNo: Number,      // ✅ ADD
  subject: String,
  marks: Number,
  status: String,
  grade: String
});

module.exports = mongoose.model("result", resultSchema);