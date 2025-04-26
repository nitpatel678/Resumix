import React from 'react';
import { Link } from 'react-router-dom'; // important

function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center py-24 px-4 sm:py-32 sm:px-6"
    >
      <h1
        id="heading"
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
      >
        Build Your <span className="text-cyan-400">Professional Resume</span> for Free
      </h1>
      <p
        id="paragraph"
        className="text-base sm:text-lg md:text-xl mb-8 text-gray-300 max-w-md sm:max-w-lg"
      >
        ATS Certified Resumes Created in Minutes
      </p>
       <Link id='subheading' to="/dashboard">
        <button className="px-5 py-3 bg-cyan-400 text-black font-bold rounded-md cursor-pointer hover:scale-105 transition">
          Start Building
        </button>
      </Link>
    </section>
  );
}

export default Hero;
