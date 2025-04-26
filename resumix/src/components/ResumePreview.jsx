import React from 'react';

const ResumePreview = ({ resumeData }) => {
  return (
    <div className="backdrop-blur-md bg-white/5 p-8 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold mb-4">{resumeData.fullName || 'Your Name'}</h1>
      <p className="mb-2">{resumeData.email || 'your@email.com'}</p>
      <p className="mb-2">{resumeData.phone || '+91 1234567890'}</p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside text-gray-300">
          {resumeData.skills.split(',').map((skill, index) => (
            <li key={index}>{skill.trim()}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p>{resumeData.education || 'Your Education Details'}</p>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <p>{resumeData.experience || 'Your Experience Details'}</p>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <p>{resumeData.projects || 'Your Projects Details'}</p>
      </div>
    </div>
  );
};

export default ResumePreview;
