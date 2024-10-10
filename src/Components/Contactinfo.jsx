import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

const ContactInfo = () => {
  const contactDetails = [
    { icon: <FaPhoneAlt />, text: '+92 333 6729529, +92 386729318', link: 'tel:+923336729529' },
    { icon: <FaEnvelope />, text: 'kazimahmad.business@gmail.com', link: 'mailto:kazimahmad.business@gmail.com' },
    { icon: <FaFacebookF />, text: 'facebook.com/kazimahmad.22', link: 'https://www.facebook.com/kazimahmad.22' },
    { icon: <FaInstagram />, text: 'instagram.com/kazimahmad_22', link: 'https://www.instagram.com/kazimahmad_22' },
    { icon: <FaTelegramPlane />, text: 't.me/kazimahmad', link: 'https://t.me/kazimahmad' },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-100 to-blue-200 text-center py-12 px-4 md:px-8 lg:px-16">
      <h3 className="text-orange-400 text-xs uppercase tracking-widest">Contact Us</h3>
      <h1 className="text-dark text-2xl md:text-3xl font-semibold my-2">How To Contact Us</h1>
      <p className="text-gray-400 text-sm md:text-base mb-6">
        You can contact us by completing given form. This form will directly send us a mail.
      </p>
      <div className="flex flex-col items-center space-y-4">
        {contactDetails.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            className="flex items-center w-full max-w-md py-3 px-4 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors duration-300"
          >
            <span className="text-yellow-400 mr-4 text-xl">{contact.icon}</span>
            <span className="text-left text-sm md:text-base">{contact.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
