import React from "react";

const clients = [
  { name: "Samsung", src: "/path/to/samsung-logo.svg" },
  { name: "Sonos", src: "/path/to/sonos-logo.svg" },
  { name: "Notion", src: "/path/to/notion-logo.svg" },
  { name: "LG", src: "/path/to/lg-logo.svg" },
  { name: "Logitech", src: "/path/to/logitech-logo.svg" },
  { name: "Anker", src: "/path/to/anker-logo.svg" },
];

const ClientsSection = () => {
  return (
    <div className="bg-black text-white py-12">
      <h2 className="text-center text-2xl font-bold mb-8">Previous Clients</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {clients.map((client, index) => (
          <div key={index} className="flex items-center">
            <img
              src={client.src}
              alt={client.name}
              className="h-12 grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsSection;
