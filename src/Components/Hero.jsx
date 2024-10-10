// src/components/Hero.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-purple-100 to-blue-200 px-4 ">
      {/* Image and Rotating Icons */}
      <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] rounded-full flex items-center justify-center mt-16">
        {/* Circular Image */}
        <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg">
          <img
            src="https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg"
            alt="User"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Rotating Social Icons */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative w-full h-full animate-spinslow">
            <div className="absolute top-0 left-[50%] transform -translate-x-[50%]">
              <FontAwesomeIcon icon={faFacebook} className="text-2xl md:text-3xl lg:text-4xl text-blue-600 hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="absolute left-0 top-[50%] transform -translate-y-[50%]">
              <FontAwesomeIcon icon={faTwitter} className="text-2xl md:text-3xl lg:text-4xl text-blue-400 hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="absolute right-0 top-[50%] transform -translate-y-[50%]">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl md:text-3xl lg:text-4xl text-pink-500 hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="absolute bottom-0 left-[50%] transform -translate-x-[50%]">
              <FontAwesomeIcon icon={faTiktok} className="text-2xl md:text-3xl lg:text-4xl text-black hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Text and Buttons */}
      <div className="mt-8 max-w-xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Welcome to Our Website MediaPro</h1>
        <p className="text-sm md:text-lg text-gray-700 mb-6">
          A creative and digital marketing agency, helping you grow your brand and business with cutting-edge solutions.
        </p>
        <div className="space-x-4">
          <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700">
            Get Started
          </button>
          <button className="bg-transparent border border-purple-600 text-purple-600 py-2 px-6 rounded-md hover:bg-purple-600 hover:text-white">
            Watch Intro
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
