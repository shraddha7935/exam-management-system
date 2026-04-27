const Attendance = require("../models/attendance");

exports.markAttendance = async (req, res) => {
    const data = new Attendance(req.body);
    await data.save();
    res.json(data);
};

exports.getAttendance = async (req, res) => {
    const data = await Attendance.find();
    res.json(data);
};