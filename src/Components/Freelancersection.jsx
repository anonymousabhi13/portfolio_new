import React from 'react';

const FreelanceLinks = () => {
  const platforms = [
    { name: 'Fiverr', url: 'https://www.fiverr.com/s/NNp6KBR', color: 'text-yellow-400' },
    { name: 'Upwork', url: '#', color: 'text-yellow-400' },
    { name: 'Guru', url: '#', color: 'text-yellow-400' },
  ];
  
  return (
    <div
      className="text-center py-16"
      style={{ background: 'linear-gradient(to right, #1a1a2e, #16213e, #0f3460)' }}
    >
      <h3 className="text-orange-400 text-sm uppercase">Freelance</h3>
      <h1 className="text-white text-3xl font-semibold mb-4">Hire Me As A Freelancer</h1>
      <p className="text-gray-300 mb-8">
        I am available on different freelancing platforms. You can hire me on given platforms.
      </p>
      <div className="flex justify-center space-x-8">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            className={`block py-2 px-6 border rounded-full ${platform.color} border-gray-300 hover:bg-gray-800`}
          >
            {platform.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FreelanceLinks;
