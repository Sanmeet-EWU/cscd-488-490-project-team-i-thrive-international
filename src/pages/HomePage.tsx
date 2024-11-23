import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-8 w-8 bg-indigo-600 rounded-full"></div>
          <h1 className="text-5xl font-bold text-indigo-900">
            Thrive International
          </h1>
        </div>
        <p className="text-2xl text-indigo-700 font-light">
          Supporting refugees in their journey to thrive and build new beginnings.
        </p>
      </div>
    </div>
  );
};

export default HomePage;