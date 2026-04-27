const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
    name: String,
    subject: String,
    date: String,
    time: String,
 className: String
});

module.exports = mongoose.model("exam", examSchema);

