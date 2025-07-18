const Bug = require('../models/Bug');
const validateBug = require('../utils/validateBug');

exports.getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (err) {
    next(err);
  }
};

exports.createBug = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const validationError = validateBug({ title, description });
    if (validationError) return res.status(400).json({ message: validationError });
    const bug = new Bug({ title, description });
    await bug.save();
    res.status(201).json(bug);
  } catch (err) {
    next(err);
  }
};

exports.updateBug = async (req, res, next) => {
  try {
    const { status } = req.body;
    const bug = await Bug.findByIdAndUpdate(
      req.params.id,
      { status, updatedAt: Date.now() },
      { new: true }
    );
    if (!bug) return res.status(404).json({ message: 'Bug not found' });
    res.json(bug);
  } catch (err) {
    next(err);
  }
};

exports.deleteBug = async (req, res, next) => {
  try {
    const bug = await Bug.findByIdAndDelete(req.params.id);
    if (!bug) return res.status(404).json({ message: 'Bug not found' });
    res.json({ message: 'Bug deleted' });
  } catch (err) {
    next(err);
  }
};
