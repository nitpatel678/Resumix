import React from 'react';
import {
  BadgeDollarSign,
  EyeOff,
  LayoutTemplate,
  Users
} from 'lucide-react';

function Different() {
  const features = [
    { title: 'Free Forever', icon: BadgeDollarSign },
    { title: 'No Watermarks', icon: EyeOff },
    { title: 'Premium Quality Templates', icon: LayoutTemplate },
    { title: 'Built for Students & Professionals', icon: Users }
  ];

  return (
    <section className="py-20 px-5 sm:px-10">
      <h2 id='heading' className="text-4xl font-bold text-center mb-12">Why We Are Different</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map(({ title, icon: Icon }, idx) => (
          <div key={idx} className="flex items-center backdrop-blur-md bg-white/10 p-6 rounded-xl shadow-md">
            <Icon className="text-cyan-400 w-7 h-7 mr-4" />
            <h3 id='subheading' className="text-2xl font-semibold">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Different;
