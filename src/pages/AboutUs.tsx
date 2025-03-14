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
          Thrive International was conceived in late 2021 by a diverse group of innovators who share a vision for thriving multicultural communities. Some were born just a few miles from where they live now, while others have circled the globe, experiencing life in multiple countries. All have witnessed the transformative power of cross-cultural relationships, enriching both their individual lives and the communities around them.

Based in Spokane, WA, Thrive International is initially focusing on empowering communities in Eastern Washington and North Idaho, as well as expanding its efforts to include Tacoma. We recognize that barriers to thriving extend beyond regional borders, so we are also engaged in initiatives to empower immigrants and citizens in other U.S. communities and internationally, collaborating with a network of trusted partners to drive meaningful change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
