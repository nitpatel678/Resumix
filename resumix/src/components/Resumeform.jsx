import React from 'react';

const ResumeForm = ({ resumeData, setResumeData }) => {
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData({ ...resumeData, [name]: value });
  };

  return (
    <form className="space-y-4">
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={resumeData.fullName}
        onChange={handleChange}
        className="w-full p-3 bg-black/30 rounded text-white placeholder-gray-400"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={resumeData.email}
        onChange={handleChange}
        className="w-full p-3 bg-black/30 rounded text-white placeholder-gray-400"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={resumeData.phone}
        onChange={handleChange}
        className="w-full p-3 bg-black/30 rounded text-white placeholder-gray-400"
      />
      <input
        type="text"
        name="skills"
        placeholder="Skills (comma separated)"
        value={resumeData.skills}
        onChange={handleChange}
        className="w-full p-3 bg-black/30 rounded text-white placeholder-gray-400"
      />
      <textarea
        name="education"
        placeholder="Education"
        value={resumeData.education}
        onChange={handleChange}
        className="w-full p-3 bg-black/30 rounded text-white placeholder-gray-400"
        rows="3"
      />
      <textarea
        name="experience"
        placeholder="Experience"
        value={resumeData.experience}
        onChange={handleChange}
        className="w-full p-3 bg-black/30 rounded text-white placeholder-gray-400"
        rows="3"
      />
      <textarea
        name="projects"
        placeholder="Projects"
        value={resumeData.projects}
        onChange={handleChange}
        className="w-full p-3 bg-black/30 rounded text-white placeholder-gray-400"
        rows="3"
      />
    </form>
  );
};

export default ResumeForm;
