import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import IntakeForms from './pages/IntakeForms';
import StudentRegistrationForm from './pages/forms/StudentRegistrationForm';
import ThriveIntakeForm from './pages/forms/ThriveIntakeForm';

export type PageType = 'home' | 'intake' | 'about' | 'studentRegistration' | 'thriveIntake';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = (): JSX.Element => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'intake':
        return <IntakeForms setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutUs />;
      case 'studentRegistration':
        return <StudentRegistrationForm />;
      case 'thriveIntake':
        return <ThriveIntakeForm />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="font-sans">
      <Navigation setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;