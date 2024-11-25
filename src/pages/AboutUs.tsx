import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-900 mb-12 text-center">
          About Us
        </h1>
        <div className="bg-white rounded-lg shadow-xl p-8">
          <p className="text-xl text-gray-700 leading-relaxed">
            Thrive International is dedicated to helping refugees establish new lives
            through comprehensive support services and community integration programs.
            Our mission is to empower individuals and families to rebuild their lives
            with dignity and purpose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
