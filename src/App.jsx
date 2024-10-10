import React from "react";

import CombinedHero from "./Components/Combinehero";
// import Services from "./Components/Services";
import WhatIDo from "./Components/Services";
import Resume from "./Components/Resume";
import ProjectShowcase from "./Components/Projects";
import ClientsSection from "./Components/Clientsection";
import TechStack from "./Components/Techstack";
import FreelancerSection from "./Components/Freelancersection";
import ContactInfo from "./Components/Contactinfo";

const App = () => {
  return (
    <div>
      {/* Header Component */}
      <header className="w-full flex justify-between items-center py-4 px-6 bg-white shadow-md  top-0 left-0 z-10">
        <div className="text-xl font-bold">Bazil.</div>
        <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900">
          Hire me
        </button>
      </header>

      {/* Main Content */}
      <main>
        {" "}
        {/* Add padding top to avoid content hiding under header */}
        <CombinedHero />
        <WhatIDo />
        <TechStack />
        <Resume />
        <ProjectShowcase />
        <FreelancerSection />
        <ContactInfo />
      </main>
    </div>
  );
};

export default App;
