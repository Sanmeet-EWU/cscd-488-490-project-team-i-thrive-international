import React from 'react';
import { Link } from 'react-router-dom';

const IntakeForms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-900 mb-8 text-center">
          Select an Intake Form
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Community Outreach and Education Intake Form */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-indigo-900">
              Community Outreach and Education
            </h2>
            <p className="text-gray-700 mt-2">
              Fill out this form for community outreach and education registration.
            </p>
            <Link
              to="/intake/community-outreach"
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 block text-center"
            >
              Open Form
            </Link>
          </div>

          {/* Thrive International Intake Form */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-indigo-900">
              Thrive International Registration
            </h2>
            <p className="text-gray-700 mt-2">
              Complete this form to register for Thrive International programs.
            </p>
            <Link
              to="/intake/thrive-international"
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 block text-center"
            >
              Open Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntakeForms;
