import React from "react";

import CombinedHero from "./Components/Combinehero";
// import Services from "./Components/Services";
import WhatIDo from "./Components/Services";
import Resume from "./Components/Resume";
import ProjectShowcase from "./Components/Projects";
import TechStack from "./Components/Techstack";
import FreelancerSection from "./Components/Freelancersection";
import ContactInfo from "./Components/Contactinfo";
import Header from "./Components/Header";
import CustomScrollbar from "./Components/Customscrollbar";

const App = () => {
  return (
    <div>
      <CustomScrollbar />
      <Header />
      <main>
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
