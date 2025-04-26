const express = require('express');
const { createOrUpdateResume, getMyResume } = require('../controllers/resumeController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, createOrUpdateResume)
  .get(protect, getMyResume);

module.exports = router;
