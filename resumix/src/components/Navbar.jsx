import React from "react";

function Navbar() {
  return (
      <nav className="flex justify-between items-center px-8 py-4 backdrop-blur-md bg-white/10 sticky top-0 z-50">
        <div id="logo" className="text-2xl font-bold tracking-widest">
          Resumix
        </div>
        {/* Hide on small screens, show on md and above */}
        <div
          id="navlinks"
          className="hidden md:flex space-x-6 text-lg"
        >
          <a href="#home" className="hover:text-cyan-400 neon-hover">
            Home
          </a>
          <a href="#features" className="hover:text-cyan-400 neon-hover">
            Features
          </a>
          <a href="#tech" className="hover:text-cyan-400 neon-hover">
            Tech Stack
          </a>
          <a href="#login" className="hover:text-cyan-400 neon-hover">
            Login
          </a>
        </div>
      </nav>
  );
}

export default Navbar;
