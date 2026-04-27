const router = require("express").Router();
const { markAttendance, getAttendance } = require("../controllers/attendanceController");

router.post("/add", markAttendance);
router.get("/", getAttendance);

module.exports = router;