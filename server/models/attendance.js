const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
    studentName: String,
    date: String,
    status: String
});

module.exports = mongoose.model("attendance", attendanceSchema);