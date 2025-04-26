import React from 'react';
import {
  Database,
  Server,
  Atom,
  Package,
  Feather,
  Lock,
  FileText
} from 'lucide-react';

const techData = [
  { name: 'MongoDB', icon: Database },
  { name: 'Express.js', icon: Server },
  { name: 'React.js', icon: Atom },
  { name: 'Node.js', icon: Package },
  { name: 'TailwindCSS', icon: Feather },
  { name: 'JWT', icon: Lock },
  { name: 'HTML2PDF.js', icon: FileText },
];

function Techstack() {
  return (
    <section id="tech" className="py-20 px-5 sm:px-10">
      <h2 id='heading' className="text-4xl font-bold text-center mb-12">Tech Stack Used</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {techData.map(({ name, icon: Icon }, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center md:justify-start gap-3 px-4 py-3 w-36 md:w-48 backdrop-blur-md bg-white/10 rounded-lg hover:scale-110 transition duration-300"
          >
            <Icon className="w-6 h-6 hover:text-cyan-400" />
            <span id='subheading' className="hidden md:inline text-lg font-medium">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Techstack;
