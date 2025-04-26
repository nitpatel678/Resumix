import React from 'react';
import { Github, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center text-center md:text-left py-6 px-4 md:px-12 backdrop-blur-md bg-white/10 text-gray-400 text-sm">
      
      {/* Centered copyright */}
      <div className="mb-4 md:mb-0 w-full md:w-auto">
        © {new Date().getFullYear()} <span className="hover:text-cyan-400">Resumix</span>. Made by <span className="hover:text-cyan-400">Nitin Patel</span>. All rights reserved.
      </div>

      {/* Icons for GitHub and LinkedIn */}
      <div className="flex justify-center md:justify-end space-x-6 w-full md:w-auto">
        <a 
          href="https://github.com/nitpatel678" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-cyan-400 transition-colors"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://www.linkedin.com/in/nitinpatelftp/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-cyan-400 transition-colors"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
