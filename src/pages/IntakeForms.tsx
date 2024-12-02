import React from 'react';
import { PageType } from '../App';

interface IntakeFormsProps {
  setCurrentPage: (page: PageType) => void;
}

const IntakeForms: React.FC<IntakeFormsProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-900 mb-12 text-center">
          Intake Forms
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Student Registration Form */}
          <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">
              Student Registration Form
            </h2>
            <p className="text-gray-600 mb-4">
              Register new students for educational programs and activities.
            </p>
            <button 
              onClick={() => setCurrentPage('studentRegistration')}
              className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors"
            >
              Access Form
            </button>
          </div>

          {/* Thrive Intake Form */}
          <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">
              Thrive Intake Form
            </h2>
            <p className="text-gray-600 mb-4">
              General intake form for Thrive International services.
            </p>
            <button 
              onClick={() => setCurrentPage('thriveIntake')}
              className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors"
            >
              Access Form
            </button>
          </div>

          {/* Soccer Camp Registration */}
          <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">
              Soccer Camp Registration
            </h2>
            <p className="text-gray-600 mb-4">
              Register participants for the upcoming soccer camp.
            </p>
            <button 
              onClick={() => setCurrentPage('soccerCamp')}
              className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors"
            >
              Access Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntakeForms;
