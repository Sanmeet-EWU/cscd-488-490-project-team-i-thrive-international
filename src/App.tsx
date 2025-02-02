import React, { useState, Dispatch, SetStateAction } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import IntakeForms from './pages/IntakeForms';
import StudentRegistrationForm from './pages/forms/NewStudentRegistrationForm';
import ThriveIntakeForm from './pages/forms/ThriveIntakeForm';
import CommunityOutreachAndEducation from './pages/forms/CommunityOutreachAndEducation';
import DSHSConsentForm from './pages/forms/DSHSConsentForm';
import CulturalIntegrationProgram from './pages/forms/CulturalIntegrationProgram';
<<<<<<< Updated upstream
import SoccerCampRegistration from './pages/forms/SoccerRegistrationCamp';
=======
import SoccerCampRegistration from './pages/forms/SoccerCampRegistration';
>>>>>>> Stashed changes
import EpiscopalPreferredCommunitiesIntakeForm from './pages/forms/EpiscopalPreferredCommunitiesIntakeForm';
import PCGAPRegistrationForm from './pages/forms/PCGAPRegistrationForm';
import YouthProgramRegistrationForm from './pages/forms/YouthProgramRegistrationForm';
import ThriveDSHSConsentForm from './pages/forms/ThriveDSHSConsentForm';

export type PageType =
  | 'home'
  | 'intake'
  | 'about'
  | 'studentRegistration'
  | 'thriveIntake'
  | 'communityOutreachAndEducation'
  | 'dshsConsent'
  | 'culturalIntegration'
  | 'soccerCamp'
  | 'episcopalPreferredCommunities'
  | 'pcGapRegistration'
  | 'youthProgramRegistration'
  | 'thriveDSHSConsent';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = (): JSX.Element => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'intake':
        return <IntakeForms setCurrentPage={setCurrentPage} />; // Pass the prop here
      case 'about':
        return <AboutUs />;
      case 'studentRegistration':
        return <StudentRegistrationForm />;
      case 'thriveIntake':
        return <ThriveIntakeForm />;
      case 'communityOutreachAndEducation':
        return <CommunityOutreachAndEducation />;
      case 'dshsConsent':
        return <DSHSConsentForm />;
      case 'culturalIntegration':
        return <CulturalIntegrationProgram />;
      case 'soccerCamp':
        return <SoccerCampRegistration />;
      case 'episcopalPreferredCommunities':
        return <EpiscopalPreferredCommunitiesIntakeForm />;
      case 'pcGapRegistration':
        return <PCGAPRegistrationForm />;
      case 'youthProgramRegistration':
        return <YouthProgramRegistrationForm />;
      case 'thriveDSHSConsent':
        return <ThriveDSHSConsentForm />;
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