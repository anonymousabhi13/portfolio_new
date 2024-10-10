// src/components/WhatIDo.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faPaintBrush, faCode } from '@fortawesome/free-solid-svg-icons';

const WhatIDo = () => {
  const services = [
    {
      title: 'UI/UX Designer',
      description: 'Creating designs, prototypes, and a seamless user experience.',
      icon: faDesktop,
    },
    {
      title: 'Graphic Designer',
      description: 'Skilled in creating stunning visuals and branding designs.',
      icon: faPaintBrush,
    },
    {
      title: 'Web Developer',
      description: 'Building responsive websites with a focus on functionality.',
      icon: faCode,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-purple-100 to-blue-200 py-16 px-4">
      <h2 className="text-4xl text-center text-white mb-8 font-bold">What I Do</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-4xl text-teal-400 mb-4">
              <FontAwesomeIcon icon={service.icon} />
            </div>
            <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
            <p className="text-gray-400 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
