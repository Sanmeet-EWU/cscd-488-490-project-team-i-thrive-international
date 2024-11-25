import React from 'react';
import { PageType } from '../App';

interface NavigationProps {
  setCurrentPage: (page: PageType) => void;
}

const Navigation: React.FC<NavigationProps> = ({ setCurrentPage }) => {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-white rounded-full"></div>
          <span className="text-2xl font-bold tracking-wide">Thrive</span>
        </div>
        <div className="flex space-x-6">
          <button
            onClick={() => setCurrentPage('home')}
            className="hover:text-secondary transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('intake')}
            className="hover:text-secondary transition-colors"
          >
            Intake Form
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className="hover:text-secondary transition-colors"
          >
            About Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
