// src/components/CombinedHero.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const CombinedHero = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row-reverse justify-center items-center bg-gradient-to-r from-purple-100 to-blue-200 px-4 pt-16">
      {/* Right Section (Image with Rotating Icons) */}
      <div className="flex flex-col justify-center items-center lg:w-1/2 lg:pl-8">
        <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] rounded-full flex items-center justify-center">
          {/* Circular Profile Image */}
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg">
            <img
              src="https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Rotating Social Icons */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="relative w-full h-full animate-spinslow">
              <div className="absolute top-0 left-[50%] transform -translate-x-[50%]">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-2xl md:text-3xl lg:text-4xl text-blue-600 hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute left-0 top-[50%] transform -translate-y-[50%]">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-2xl md:text-3xl lg:text-4xl text-blue-400 hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute right-0 top-[50%] transform -translate-y-[50%]">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-2xl md:text-3xl lg:text-4xl text-pink-500 hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-[50%] transform -translate-x-[50%]">
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="text-2xl md:text-3xl lg:text-4xl text-black hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left Section (Webdesigner & Photographer) */}
      <div className="flex flex-col justify-center items-center lg:w-1/2 lg:pr-8 mt-12 lg:mt-0">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-center text-white">
          Webdesigner
        </h1>
        <h2 className="text-4xl md:text-6xl text-gray-300 font-light text-center -mt-6 md:-mt-8">
          & Photographer
        </h2>
        <p className="text-lg md:text-xl text-gray-500 mt-4 text-center">
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

export default CombinedHero;
