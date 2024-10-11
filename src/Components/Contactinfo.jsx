import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactInfo = () => {
  const contactDetails = [
    { icon: <FaPhoneAlt />, text: "+918817836116", link: "tel:+918817836116" },
    {
      icon: <FaEnvelope />,
      text: "abhilashpatel687@gmail.com",
      link: "mailto:abhilashpatel687@gmail.com",
    },
    {
      icon: <FaFacebookF />,
      text: "facebook.com/abhilash",
      link: "https://www.facebook.com/abhilash.patel.5891",
    },
    {
      icon: <FaInstagram />,
      text: "instagram.com/anonymousabhi_13",
      link: "https://www.instagram.com/anonymousabhi_13",
    },
    {
      icon: <FaLinkedinIn />,
      text: "Linkdin",
      link: "https://www.linkedin.com/in/abhilash-patel-9939682a4/",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-100 to-blue-200 text-center py-12 px-4 md:px-8 lg:px-16">
      <h3 className="text-orange-400 text-xs uppercase tracking-widest">
        Contact Me
      </h3>
      <h1 className="text-dark text-2xl md:text-3xl font-semibold my-2">
        How To Contact Me
      </h1>
      <p className="text-gray-400 text-sm md:text-base mb-6">
        "You can reach me through any of these channels. I'm always here and
        ready to assist you."
      </p>
      <div className="flex flex-col items-center space-y-4">
        {contactDetails.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            className="flex items-center w-full max-w-md py-3 px-4 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors duration-300"
          >
            <span className="text-yellow-400 mr-4 text-xl">{contact.icon}</span>
            <span className="text-left text-sm md:text-base">
              {contact.text}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
