import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-white rounded-full"></div>
          <span className="text-2xl font-bold tracking-wide">Thrive</span>
        </div>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-secondary transition-colors">
            Home
          </Link>
          <Link to="/intake" className="hover:text-secondary transition-colors">
            Intake Forms
          </Link>
          <Link to="/about" className="hover:text-secondary transition-colors">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;