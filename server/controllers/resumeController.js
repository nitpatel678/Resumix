const Resume = require('../models/Resume');

exports.createOrUpdateResume = async (req, res) => {
  try {
    const existing = await Resume.findOne({ user: req.user._id });

    if (existing) {
      const updated = await Resume.findOneAndUpdate(
        { user: req.user._id },
        req.body,
        { new: true }
      );
      return res.json(updated);
    }

    const newResume = await Resume.create({ ...req.body, user: req.user._id });
    res.status(201).json(newResume);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getMyResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({ user: req.user._id });
    res.json(resume);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
