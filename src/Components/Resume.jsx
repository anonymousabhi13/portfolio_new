// src/components/Resume.jsx
import React from "react";

const Resume = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-purple-100 to-blue-200 px-8 py-4 md:px-12 md:py-8">
      {/* Education Section */}
      <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-4 md:p-6 m-2">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Education</h2>

        {/* SSC */}
        <div className="relative border-l-2 border-purple-600 pl-4 mb-4">
          <div className="absolute top-0 left-[-0.6rem] w-4 h-4 bg-purple-600 rounded-full"></div>
          <p className="text-sm md:text-lg font-semibold">2017 - 2018</p>
          <h3 className="font-bold text-base md:text-lg">SSC</h3>
          <p className="text-gray-600 text-xs md:text-sm">
            Completed my Senior secondary from Greatemen International School,
            Saugor with a CGPA of 8.1.
          </p>
        </div>

        {/* HSC */}
        <div className="relative border-l-2 border-purple-600 pl-4 mb-4">
          <div className="absolute top-0 left-[-0.6rem] w-4 h-4 bg-purple-600 rounded-full"></div>
          <p className="text-sm md:text-lg font-semibold">2019 - 2020</p>
          <h3 className="font-bold text-base md:text-lg">HSC</h3>
          <p className="text-gray-600 text-xs md:text-sm">
            Completed my higher secondary from Greatemen International School,
            Saugor with a CGPA of 8.5.
          </p>
        </div>

        {/* Bachelor Degree */}
        <div className="relative border-l-2 border-purple-600 pl-4 mb-4">
          <div className="absolute top-0 left-[-0.6rem] w-4 h-4 bg-purple-600 rounded-full"></div>
          <p className="text-sm md:text-lg font-semibold">2020 - 2024</p>
          <h3 className="font-bold text-base md:text-lg">
            Bachelor In Computer Science Engineering
          </h3>
          <p className="text-gray-600 text-xs md:text-sm">
            Completed my Bachelor's Degree from Lakshmi Narain College of
            Technology and Science, Bhopal, with a CGPA of 8.9.
          </p>
        </div>
        <br></br>
        <br></br>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Certifications
        </h2>

        {/* SSC */}
        <div className="relative border-l-2 border-purple-600 pl-4 mb-4">
          <div className="absolute top-0 left-[-0.6rem] w-4 h-4 bg-purple-600 rounded-full"></div>
          <p className="text-sm md:text-lg font-semibold">
            Jan 2021 - April 2021
          </p>
          <h3 className="font-bold text-base md:text-lg">Frontend Developer</h3>
          <p className="text-gray-600 text-xs md:text-sm">
            Completed my Frontend Developer training at Sheryians coding School,
            Bhopal.
          </p>
        </div>

        {/* HSC */}
        <div className="relative border-l-2 border-purple-600 pl-4 mb-4">
          <div className="absolute top-0 left-[-0.6rem] w-4 h-4 bg-purple-600 rounded-full"></div>
          <p className="text-sm md:text-lg font-semibold">
            July 2021 - Oct 2021
          </p>
          <h3 className="font-bold text-base md:text-lg">Java SE</h3>
          <p className="text-gray-600 text-xs md:text-sm">
            Completed my Java Developer training at Sheryians coding School,
            Bhopal.
          </p>
        </div>
        <div className="relative border-l-2 border-purple-600 pl-4 mb-4">
          <div className="absolute top-0 left-[-0.6rem] w-4 h-4 bg-purple-600 rounded-full"></div>
          <p className="text-sm md:text-lg font-semibold">
            Nov 2021 - Jan 2022
          </p>
          <h3 className="font-bold text-base md:text-lg">Backend developer</h3>
          <p className="text-gray-600 text-xs md:text-sm">
            Completed my Backend Developer training at Sheryians coding School,
            Bhopal.
          </p>
        </div>
        {/* Bachelor Degree */}
        <div className="relative border-l-2 border-purple-600 pl-4 mb-4">
          <div className="absolute top-0 left-[-0.6rem] w-4 h-4 bg-purple-600 rounded-full"></div>
          <p className="text-sm md:text-lg font-semibold">
            Jan 2022 - April 2022
          </p>
          <h3 className="font-bold text-base md:text-lg">React js developer</h3>
          <p className="text-gray-600 text-xs md:text-sm">
            Completed my Backend Developer training at Sheryians coding School,
            Bhopal.
          </p>
        </div>
      </div>

      {/* Experience Section */}
      <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-4 md:p-6 m-2 flex flex-col">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Experience</h2>

        {/* Software Developer at HackerKernel */}
        <div className="relative border-l-2 border-purple-600 pl-4 mb-4">
          <div className="absolute top-0 left-[-0.6rem] w-4 h-4 bg-purple-600 rounded-full"></div>
          <p className="text-sm md:text-lg font-semibold">
            Oct 2022 – Feb 2023
          </p>
          <h3 className="font-bold text-base md:text-lg">
            Software Developer at HackerKernel
          </h3>
          <ul className="list-disc pl-6 text-gray-600 text-xs md:text-sm">
            <li>
              Developed various applications like Event management app, Food
              Delivery app, Trip Planner, and real-time projects with API.
            </li>
            <li>
              Worked with Google Firebase to manage user input data across
              multiple platforms including Android.
            </li>
            <li>
              Collaborated with team members using version control systems such
              as Git to organize modifications and assign tasks.
            </li>
            <li>
              Worked in Designing UI and implemented various design architecture
              like MVC, MVP, MVVM for development.
            </li>
            <li>
              During training, learned proper design patterns and writing clean
              code for development and completing tasks on time without delay.
            </li>
            <li>
              Learned about various state management for the application and
              design patterns to make the application efficient and fast.
            </li>
          </ul>
        </div>

        {/* Self-Employed */}
        <div className="relative border-l-2 border-purple-600 pl-4 mb-4">
          <div className="absolute top-0 left-[-0.6rem] w-4 h-4 bg-purple-600 rounded-full"></div>
          <p className="text-sm md:text-lg font-semibold">2023 - Present</p>
          <h3 className="font-bold text-base md:text-lg">Freelancer</h3>
          <ul className="list-disc pl-6 text-gray-600 text-xs md:text-sm">
            <li>
              Developed various applications like social media, article apps,
              and real-time projects with API.
            </li>
            <li>
              Worked with Google Firebase to manage user inputted data across
              multiple platforms including web.
            </li>
            <li>
              Collaborated with team members using version control systems such
              as Git to organize modifications and assign tasks.
            </li>
            <li>
              Worked in Designing RESTFUL API and implemented various Schema
              strategies to optimize the database.
            </li>
          </ul>
        </div>

        {/* Back-end Developer */}
        <div className="relative border-l-2 border-purple-600 pl-4 mb-4">
          <div className="absolute top-0 left-[-0.6rem] w-4 h-4 bg-purple-600 rounded-full"></div>
          <p className="text-sm md:text-lg font-semibold">Jan 2024 - Present</p>
          <h3 className="font-bold text-base md:text-lg">
            Founder Aetherlogic Technologies
          </h3>
          <ul className="list-disc pl-6 text-gray-600 text-xs md:text-sm">
            <li>
              Founded a software development and IT consulting company with two
              college mates.
            </li>
            <li>
              Worked with over 10+ clients and successfully delivered various
              services.
            </li>
            <li>
              Collaborated with team members using Git for version control,
              organizing modifications and assigning tasks.
            </li>
            <li>
              Delivered a range of services, including eCommerce site
              development, landing page design, logo creation, SEO, and
              deployment.
            </li>

            <li>Gained insights into the challenges of running a business.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
