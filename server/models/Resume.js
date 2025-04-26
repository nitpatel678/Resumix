const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    personalInfo: {
      fullName: String,
      email: String,
      phone: String,
      address: String,
      linkedin: String,
      github: String,
    },
    education: [
      {
        school: String,
        degree: String,
        field: String,
        startDate: String,
        endDate: String,
      },
    ],
    experience: [
      {
        company: String,
        title: String,
        startDate: String,
        endDate: String,
        description: String,
      },
    ],
    skills: [String],
    projects: [
      {
        name: String,
        description: String,
        link: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Resume', resumeSchema);
