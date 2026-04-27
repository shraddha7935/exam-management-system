require("dotenv").config(); // ✅ VERY IMPORTANT

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// 👉 MongoDB connect
connectDB();

// Routes
const examRoutes = require("./routes/examRoutes");
const resultRoutes = require("./routes/resultRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes"); // ✅ student login

app.use("/exams", examRoutes);
app.use("/results", resultRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/auth", authRoutes);
app.use("/students", studentRoutes); // ✅ ADD

app.get("/", (req, res) => {
  res.send("Server is running");
});

// ❗ ALWAYS LAST
app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});