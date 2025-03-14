// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import IntakeForms from './pages/IntakeForms';
import StudentRegistrationForm from './pages/forms/NewStudentRegistrationForm';
import ThriveIntakeForm from './pages/forms/ThriveIntakeForm';
import CommunityOutreachAndEducation from './pages/forms/CommunityOutreachAndEducation';
import DSHSConsentForm from './pages/forms/DSHSConsentForm';
import CulturalIntegrationProgram from './pages/forms/CulturalIntegrationProgram';
import SoccerCampRegistration from './pages/forms/SoccerCampRegistration';
import EpiscopalPreferredCommunitiesIntakeForm from './pages/forms/EpiscopalPreferredCommunitiesIntakeForm';
import PCGAPRegistrationForm from './pages/forms/PCGAPRegistrationForm';
import YouthProgramRegistrationForm from './pages/forms/YouthProgramRegistrationForm';
import ThriveDSHSConsentForm from './pages/forms/ThriveDSHSConsentForm';
import CommunityOutreachMonthlyReport from './pages/forms/CommunityOutreachMonthlyReport';
import DSHSCommunityOutreachAndEducationForm from './pages/forms/DSHSCommunityOutreachAndEducationForm';
import FamilyTracker from './pages/FamilyTracker'; // Add this import

const App: React.FC = () => {
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
          <Route path="/family-tracker" element={<FamilyTracker />} /> {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;