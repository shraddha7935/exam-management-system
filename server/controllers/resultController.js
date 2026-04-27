const Result = require("../models/Result");

// ADD
exports.addResult = async (req, res) => {
  try {
    const result = new Result(req.body);
    await result.save();
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET
exports.getResults = async (req, res) => {
  const data = await Result.find().sort({ _id: -1 });
  res.json(data);
};

// DELETE
exports.deleteResult = async (req, res) => {
  await Result.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

// UPDATE
exports.updateResult = async (req, res) => {
  await Result.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Updated" });
};