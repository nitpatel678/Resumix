import React, { useState } from 'react';
import ResumeForm from '../components/Resumeform';
import ResumePreview from '../components/ResumePreview';

const Dashboard = () => {
  const [resumeData, setResumeData] = useState({
    fullName: '',
    email: '',
    phone: '',
    skills: '',
    education: '',
    experience: '',
    projects: '',
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#0f0f0f] text-white">
      
      {/* Form Section */}
      <div className="w-full md:w-1/2 p-8 backdrop-blur-md bg-white/10">
        <h1 className="text-3xl font-bold mb-6">Fill Your Resume</h1>
        <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
      </div>

      {/* Live Preview Section */}
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-6">Live Preview</h1>
        <ResumePreview resumeData={resumeData} />
      </div>

    </div>
  );
};

export default Dashboard;
