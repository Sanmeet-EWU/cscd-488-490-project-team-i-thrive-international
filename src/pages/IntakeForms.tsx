import React from 'react';
import { Link } from 'react-router-dom';

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
      </div>
    </div>
  );
};

export default IntakeForms;