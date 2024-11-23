import React from 'react';
import { PageType } from '../App';

interface NavigationProps {
  setCurrentPage: (page: PageType) => void;
}

const Navigation: React.FC<NavigationProps> = ({ setCurrentPage }) => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-indigo-600 rounded-full"></div>
            <span className="text-xl font-semibold text-indigo-900">Thrive</span>
          </div>
          <div className="flex space-x-8">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center px-3 py-2 text-indigo-600 hover:text-indigo-900 font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('intake')}
              className="flex items-center px-3 py-2 text-indigo-600 hover:text-indigo-900 font-medium transition-colors"
            >
              Intake Forms
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className="flex items-center px-3 py-2 text-indigo-600 hover:text-indigo-900 font-medium transition-colors"
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;