import React from 'react';
import { motion } from 'framer-motion'; // for animation

const projects = [
  { title: 'Project 1', img: 'https://i.pinimg.com/564x/6c/3f/50/6c3f508d58b7476c4a2a23557512b948.jpg' },
  { title: 'Project 2', img: 'https://i.pinimg.com/564x/6c/3f/50/6c3f508d58b7476c4a2a23557512b948.jpg' },
  { title: 'Project 3', img: 'https://i.pinimg.com/564x/6c/3f/50/6c3f508d58b7476c4a2a23557512b948.jpg' },
  { title: 'Project 4', img: 'https://i.pinimg.com/564x/6c/3f/50/6c3f508d58b7476c4a2a23557512b948.jpg' },
  { title: 'Project 5', img: 'https://i.pinimg.com/564x/6c/3f/50/6c3f508d58b7476c4a2a23557512b948.jpg' },
  { title: 'Project 6', img: 'https://i.pinimg.com/564x/6c/3f/50/6c3f508d58b7476c4a2a23557512b948.jpg' },
];

const Portfolio = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Portfolio
          <span className="block h-1 w-24 bg-pink-500 mt-2 mx-auto"></span>
        </h2>
        <p className="text-center text-lg mb-12 text-gray-200">My Last Projects:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }} // added shadow effect on hover
              className="relative shadow-lg rounded-lg overflow-hidden bg-white transition-transform duration-300"
            >
              <img
                src={project.img}
                alt={`${project.title} thumbnail`} // improved alt text
                className="w-full h-60 object-cover transition-opacity duration-300"
                onError={(e) => {
                  e.target.onerror = null; // prevents infinite loop
                  e.target.src = '/path-to-default-image.jpg'; // fallback image
                }}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
