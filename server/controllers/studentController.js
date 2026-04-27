const Student = require("../models/Student");

exports.loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Incoming:", email, password); // ✅ debug

    const student = await Student.findOne({
      email: email.trim(),
      password: password.trim()
    });

    console.log("DB Result:", student); // ✅ debug

    if (!student) {
      return res.status(401).json({ message: "Invalid login" });
    }

    res.json(student);

  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ message: err.message });
  }
};