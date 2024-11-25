import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import IntakeForm from './pages/IntakeForm';

export type PageType = 'home' | 'intake' | 'about';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = (): JSX.Element => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'intake':
        return <IntakeForm />;
      case 'about':
        return <AboutUs />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="font-sans">
      <Navigation setCurrentPage={(page: PageType) => setCurrentPage(page)} />
      {renderPage()}
    </div>
  );
};

export default App;
