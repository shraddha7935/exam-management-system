const Exam = require("../models/Exam");

exports.addExam = async (req, res) => {
    const exam = new Exam(req.body);
    await exam.save();
    res.json(exam);
};

exports.getExams = async (req, res) => {
    const data = await Exam.find();
    res.json(data);
};