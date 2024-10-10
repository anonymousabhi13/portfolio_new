// src/components/TechStack.jsx
import React from "react";
import { motion } from "framer-motion";

// TechStack array with name and logo path for each technology
const techStack = [
  { name: "HTML", logo: "/icons/Html_i.png" },
  { name: "CSS", logo: "/icons/Css_i.png" },
  { name: "TailwindCSS", logo: "/icons/Tail_i.png" },
  { name: "Bootstrap", logo: "/icons/Boot_i.png" },
  { name: "JavaScript", logo: "/icons/Js_i.png" },
  { name: "Node.js", logo: "/icons/Node_i.png" },
  { name: "Express", logo: "/icons/Express_i.png" },
  { name: "MongoDB", logo: "/icons/Mongo_i.png" },
  { name: "React", logo: "/icons/React_i.png" },
  { name: "Redux", logo: "/icons/Redux_i.png" },
];

const TechStack = () => {
  return (
    <>
      <div
      className="logogrand w-full overflow-hidden h-3/5 text-white flex flex-col items-center justify-top "
      style={{ background: 'linear-gradient(to right, #1a1a2e, #16213e, #0f3460)' }} // Updated gradient background
    >
      <h1 className="mt-16 text-4xl font-semibold">Latest TechStack</h1>
      {/* Title */}
      

      {/* Horizontal Logo Strip */}
      <div className="logoparent mt-16 h-1/4 w-full flex items-center overflow-hidden mb-16">
        {/* First set of logos */}
        <motion.div
          className="logostrip h-full flex items-center gap-28" // Increased gap for more space between icons
          animate={{ x: [0, -2000] }} // Adjust based on the total width of icons + gaps
          transition={{ ease: "linear", duration: 15, repeat: Infinity }} // Smooth and continuous
          style={{ width: "200%" }} // Ensures that the full width of both sets can fit without overlap
        >
          {techStack.map((tech, index) => (
            <img
              key={index}
              className="h-20 w-20 object-contain" // Ensures all icons are uniform
              src={tech.logo}
              alt={tech.name}
            />
          ))}
          {/* Duplicate the first set for a continuous loop */}
          {techStack.map((tech, index) => (
            <img
              key={index + techStack.length} // Unique key for duplicated icons
              className="h-20 w-20 object-contain" // Uniform size for duplicated icons
              src={tech.logo}
              alt={tech.name}
            />
          ))}
        </motion.div>
      </div>
    </div>
    </>
    
  );
};

export default TechStack;
