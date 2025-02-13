import React from 'react';
import { Link } from 'react-router-dom';

<<<<<<< Updated upstream
interface IntakeFormsProps {
  setCurrentPage: (page: PageType) => void; // Define the prop type
}

const IntakeForms: React.FC<IntakeFormsProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-900 mb-12 text-center">
          Intake Forms
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* New Student Registration Form */}
          <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">
              New Student Registration Form
            </h2>
            <p className="text-gray-600 mb-4">
              Register new students for educational programs and activities.
            </p>
            <button
              onClick={() => setCurrentPage('studentRegistration')}
              className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors"
            >
              Access Form
            </button>
          </div>

          {/* Thrive Intake Form */}
          <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">
              Thrive Intake Form
            </h2>
            <p className="text-gray-600 mb-4">
              General intake form for Thrive International services.
            </p>
            <button
              onClick={() => setCurrentPage('thriveIntake')}
              className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors"
            >
              Access Form
            </button>
          </div>

          {/* Community Outreach Intake */}
          <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">
            Community Outreach and Education Intake Form
            </h2>
            <p className="text-gray-600 mb-4">
              Community outreach and education intake form.
            </p>
            <button
              onClick={() => setCurrentPage('communityOutreachAndEducation')}
              className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors"
            >
              Access Form
            </button>
          </div>

          {/* DSHS Consent Form */}
          <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">
              DSHS Consent Form
            </h2>
            <p className="text-gray-600 mb-4">
              Consent form required for DSHS programs and services.
            </p>
            <button
              onClick={() => setCurrentPage('dshsConsent')}
              className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors"
            >
              Access Form
            </button>
          </div>

          {/* Cultural Integration Program */}
          <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">
              Cultural Integration Program
            </h2>
            <p className="text-gray-600 mb-4">
              Form for participants in cultural integration programs.
            </p>
            <button
              onClick={() => setCurrentPage('culturalIntegration')}
              className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors"
            >
              Access Form
            </button>
          </div>

          {/* Soccer Camp Registration */}
          <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">
              Soccer Camp Registration
            </h2>
            <p className="text-gray-600 mb-4">
              Register participants for the soccer camp program.
            </p>
            <button
              onClick={() => setCurrentPage('soccerCamp')}
              className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors"
            >
              Access Form
            </button>
          </div>

          {/* Episcopal Preferred Communities Intake Form */}
          <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">
              Episcopal Preferred Communities Intake Form
            </h2>
            <p className="text-gray-600 mb-4">
              Intake form for clients enrolled in the Episcopal Preferred Communities Program.
            </p>
            <button
              onClick={() => setCurrentPage('episcopalPreferredCommunities')}
              className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors"
            >
              Access Form
            </button>
          </div>

          {/* PC GAP Registration Form */}
          <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">
              PC GAP Registration Form
            </h2>
            <p className="text-gray-600 mb-4">
              Registration form for the Preferred Communities GAP Program.
            </p>
            <button
              onClick={() => setCurrentPage('pcGapRegistration')}
              className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors"
            >
              Access Form
            </button>
          </div>

          {/* Youth Program Registration Form */}
          <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">
              Youth Program Registration Form
            </h2>
            <p className="text-gray-600 mb-4">
              Registration form for the Thrive International Youth Program.
            </p>
            <button
              onClick={() => setCurrentPage('youthProgramRegistration')}
              className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors"
            >
              Access Form
            </button>
          </div>

          {/* Thrive/DSHS Consent Form */}
          <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">
              Thrive/DSHS Consent Form
            </h2>
            <p className="text-gray-600 mb-4">
              Consent form for Thrive International and DSHS programs.
            </p>
            <button
              onClick={() => setCurrentPage('thriveDSHSConsent')}
              className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors"
            >
              Access Form
            </button>
          </div>
        </div>
=======
const IntakeForms: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-indigo-900 mb-6">Intake Forms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Student Registration */}
        <Link
          to="/student-registration"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-indigo-800">Student Registration</h2>
          <p className="text-gray-600 mt-2">Register new students for programs.</p>
        </Link>

        {/* Thrive Intake Form */}
        <Link
          to="/thrive-intake"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-indigo-800">Thrive Intake Form</h2>
          <p className="text-gray-600 mt-2">Complete the Thrive intake process.</p>
        </Link>

        {/* Community Outreach */}
        <Link
          to="/community-outreach"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-indigo-800">Community Outreach</h2>
          <p className="text-gray-600 mt-2">Engage with community outreach programs.</p>
        </Link>

        {/* DSHS Consent Form */}
        <Link
          to="/dshs-consent"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-indigo-800">DSHS Consent Form</h2>
          <p className="text-gray-600 mt-2">Provide consent for DSHS services.</p>
        </Link>

        {/* Cultural Integration */}
        <Link
          to="/cultural-integration"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-indigo-800">Cultural Integration</h2>
          <p className="text-gray-600 mt-2">Join cultural integration programs.</p>
        </Link>

        {/* Soccer Camp Registration */}
        <Link
          to="/soccer-camp"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-indigo-800">Soccer Camp Registration</h2>
          <p className="text-gray-600 mt-2">Register for soccer camps.</p>
        </Link>

        {/* Episcopal Preferred Communities Intake Form */}
        <Link
          to="/episcopal-communities"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-indigo-800">Episcopal Preferred Communities</h2>
          <p className="text-gray-600 mt-2">Intake form for Episcopal communities.</p>
        </Link>

        {/* PCGAP Registration Form */}
        <Link
          to="/pcgap-registration"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-indigo-800">PCGAP Registration</h2>
          <p className="text-gray-600 mt-2">Register for PCGAP programs.</p>
        </Link>

        {/* Youth Program Registration Form */}
        <Link
          to="/youth-program"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-indigo-800">Youth Program Registration</h2>
          <p className="text-gray-600 mt-2">Register for youth programs.</p>
        </Link>

        {/* Thrive DSHS Consent Form */}
        <Link
          to="/thrive-dshs-consent"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-indigo-800">Thrive DSHS Consent</h2>
          <p className="text-gray-600 mt-2">Provide consent for Thrive DSHS services.</p>
        </Link>

        {/* Community Outreach Monthly Report */}
        <Link
          to="/community-outreach-report"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-indigo-800">Community Outreach Report</h2>
          <p className="text-gray-600 mt-2">Submit monthly outreach reports.</p>
        </Link>

        {/* DSHS Community Outreach and Education Form */}
        <Link
          to="/dshs-community-outreach"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-indigo-800">DSHS Community Outreach</h2>
          <p className="text-gray-600 mt-2">Engage with DSHS outreach programs.</p>
        </Link>
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default IntakeForms;