// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-100 to-blue-50 flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-extrabold text-indigo-900 mb-6">
          THRIVE INTERNATIONAL
        </h1>
        <p className="text-2xl text-neutral-700 leading-relaxed">
          Supporting Refugees In Their Journey To Thrive And Build New Beginnings.
        </p>
        <Link
          to="/family-tracker"
          className="mt-8 px-6 py-3 bg-accent text-white rounded-lg shadow-lg hover:bg-amber-600 transition inline-block"
        >
          Family Tracker
        </Link>
      </div>
    </div>
  );
};

export default HomePage;