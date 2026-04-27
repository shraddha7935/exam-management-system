const router = require("express").Router();
const { addExam, getExams } = require("../controllers/examController");

router.post("/add", addExam);
router.get("/", getExams);

module.exports = router;