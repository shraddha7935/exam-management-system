const express = require("express");
const router = express.Router();

const resultController = require("../controllers/resultController");

router.post("/add", resultController.addResult);
router.get("/", resultController.getResults);

// ✅ NEW
router.delete("/:id", resultController.deleteResult);
router.put("/:id", resultController.updateResult);

module.exports = router;