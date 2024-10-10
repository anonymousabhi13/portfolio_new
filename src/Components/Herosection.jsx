// src/components/Herosection.jsx
import React from "react";

const Herosection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      {/* Header */}
      <header className="w-full flex justify-between items-center py-6">
        <div className="text-xl font-bold">Bazil.</div>
        <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900">
          Hire me
        </button>
      </header>

      {/* Hero Content */}
      <div className="text-center mt-16">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Webdesigner
        </h1>
        <h2 className="text-4xl md:text-6xl text-gray-300 font-light -mt-6 md:-mt-8">
          & Photographer
        </h2>
        <p className="text-lg md:text-xl text-gray-500 mt-4">
          Based in Paris, France.
        </p>

        {/* Profile Image */}
        <div className="mt-12 w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mx-auto">
          <img
            src="https://img.freepik.com/free-photo/portrait-confident-young-man_23-2149275535.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-900">
            You need a designer
          </button>
          <button className="border border-black text-black py-2 px-6 rounded-md hover:bg-black hover:text-white">
            Let's collaborate
          </button>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
