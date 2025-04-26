import React from 'react'

function Whatarewe() {
  return (
    <section id="features" className="py-20 px-5 sm:px-10">
      <h2 id='heading' className="text-4xl font-bold text-center mb-12">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="backdrop-blur-md bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 id='subheading' className="text-2xl font-semibold mb-4">Free Resume Creation</h3>
          <p id='paragraph' className="text-gray-400">
            Build professional resumes for free using our intuitive editor with real-time previews.
          </p>
        </div>

        <div className="backdrop-blur-md bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 id='subheading' className="text-2xl font-semibold mb-4">ATS Certification</h3>
          <p id='paragraph' className="text-gray-400">
            Ensure your resume is optimized and ready to pass through Applicant Tracking Systems.
          </p>
        </div>

        <div className="backdrop-blur-md bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 id='subheading' className="text-2xl font-semibold mb-4">Multiple Templates</h3>
          <p id='paragraph' className="text-gray-400">
            Choose from a variety of modern and professional templates that suit every job type.
          </p>
        </div>

        <div className="backdrop-blur-md bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 id='subheading' className="text-2xl font-semibold mb-4">Easy PDF Download</h3>
          <p id='paragraph' className="text-gray-400">
            Instantly export your resume as a high-quality PDF with just one click.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Whatarewe
