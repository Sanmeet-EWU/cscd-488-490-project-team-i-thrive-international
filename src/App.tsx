<<<<<<< Updated upstream
import React, { useState, Dispatch, SetStateAction } from 'react';
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
import SoccerCampRegistration from './pages/forms/SoccerRegistrationCamp';
=======
import SoccerCampRegistration from './pages/forms/SoccerCampRegistration';
>>>>>>> Stashed changes
=======
import SoccerCampRegistration from './pages/forms/SoccerCampRegistration';
>>>>>>> Stashed changes
import EpiscopalPreferredCommunitiesIntakeForm from './pages/forms/EpiscopalPreferredCommunitiesIntakeForm';
import PCGAPRegistrationForm from './pages/forms/PCGAPRegistrationForm';
import YouthProgramRegistrationForm from './pages/forms/YouthProgramRegistrationForm';
import ThriveDSHSConsentForm from './pages/forms/ThriveDSHSConsentForm';
<<<<<<< Updated upstream

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

=======
import CommunityOutreachMonthlyReport from './pages/forms/CommunityOutreachMonthlyReport';
import DSHSCommunityOutreachAndEducationForm from './pages/forms/DSHSCommunityOutreachAndEducationForm';

const App: React.FC = () => {
>>>>>>> Stashed changes
  return (
    <Router>
      <div className="font-sans">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/intake" element={<IntakeForms />} />
          <Route path="/student-registration" element={<StudentRegistrationForm />} />
          <Route path="/thrive-intake" element={<ThriveIntakeForm />} />
          <Route path="/community-outreach" element={<CommunityOutreachAndEducation />} />
          <Route path="/dshs-consent" element={<DSHSConsentForm />} />
          <Route path="/cultural-integration" element={<CulturalIntegrationProgram />} />
          <Route path="/soccer-camp" element={<SoccerCampRegistration />} />
          <Route path="/episcopal-communities" element={<EpiscopalPreferredCommunitiesIntakeForm />} />
          <Route path="/pcgap-registration" element={<PCGAPRegistrationForm />} />
          <Route path="/youth-program" element={<YouthProgramRegistrationForm />} />
          <Route path="/thrive-dshs-consent" element={<ThriveDSHSConsentForm />} />
          <Route path="/community-outreach-report" element={<CommunityOutreachMonthlyReport />} />
          <Route path="/dshs-community-outreach" element={<DSHSCommunityOutreachAndEducationForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;