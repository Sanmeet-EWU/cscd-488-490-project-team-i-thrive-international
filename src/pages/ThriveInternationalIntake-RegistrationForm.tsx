import React, { useState } from 'react';

const IntakeForm = () => {
  const [formData, setFormData] = useState({
    intakeDate: '',
    navigatorName: '',
    oria: false,
    emm: false,
    internalReferral: false,
    name: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    countryOfOrigin: '',
    phone: '',
    email: '',
    address: '',
    immigrationStatus: '',
    alienNumber: '',
    eligibilityDate: '',
    services: []
  });

  const immigrationStatuses = [
    'Refugee',
    'Asylum',
    'Cuban and Haitian entrants',
    'Amerasians',
    'Certified victims of human trafficking',
    'Iraqi and Afghan Special Immigrants',
    'Afghan Humanitarian Parolees',
    'Afghans with Special Immigrant Parole (SI/SQ Parole) or Special Immigrant Conditional Permanent Residents (SI CPR)',
    'Ukrainian Humanitarian Parolees'
  ];

  const serviceNeeds = [
    'Housing',
    'Employment/Financials',
    'Medical',
    'Assistance Services',
    'Other'
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src="/thrive-logo.png" alt="Thrive International" className="mb-6 mx-auto" />
      <h1 className="text-2xl font-bold text-center mb-8">INTAKE/REGISTRATION FORM</h1>
      
      <form className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              Intake Date
              <input
                type="date"
                name="intakeDate"
                className="mt-1 w-full p-2 border rounded"
              />
            </label>
            <label className="block">
              Navigator Name
              <input
                type="text"
                name="navigatorName"
                className="mt-1 w-full p-2 border rounded"
              />
            </label>
          </div>

          <div className="space-y-2">
            <div>
              <label className="flex items-center">
                <input type="checkbox" name="oria" className="mr-2" />
                ORIA
              </label>
              <div className="ml-6 space-y-1">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Affordable Housing
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Teen & Kid Closet
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Medical
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Other
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" name="emm" className="mr-2" />
              EMM
            </label>
            <div>
              <label className="flex items-center">
                <input type="checkbox" name="internalReferral" className="mr-2" />
                Internal Referral
              </label>
              <div className="ml-6 space-y-1">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Economic Empowerment
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Women's Empowerment
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Youth Empowerment
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">PARTICIPANT INFORMATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              Name
              <input type="text" className="mt-1 w-full p-2 border rounded" />
            </label>
            <label className="block">
              Last Name
              <input type="text" className="mt-1 w-full p-2 border rounded" />
            </label>
            <label className="block">
              Date of Birth
              <input type="date" className="mt-1 w-full p-2 border rounded" />
            </label>
            <label className="block">
              Gender
              <input type="text" className="mt-1 w-full p-2 border rounded" />
            </label>
            <label className="block">
              Country of Origin
              <input type="text" className="mt-1 w-full p-2 border rounded" />
            </label>
            <label className="block">
              Phone Number
              <input type="tel" className="mt-1 w-full p-2 border rounded" />
            </label>
            <label className="block">
              Email Address
              <input type="email" className="mt-1 w-full p-2 border rounded" />
            </label>
            <label className="block">
              Address
              <input type="text" className="mt-1 w-full p-2 border rounded" />
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">CURRENT IMMIGRATION STATUS</h2>
          <div className="space-y-2">
            {immigrationStatuses.map(status => (
              <label key={status} className="flex items-center">
                <input type="radio" name="immigrationStatus" className="mr-2" />
                {status}
              </label>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              Alien #
              <input type="text" className="mt-1 w-full p-2 border rounded" />
            </label>
            <label className="block">
              Eligibility Date
              <input type="date" className="mt-1 w-full p-2 border rounded" />
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">WHAT SERVICES IS PARTICIPANT IN NEED OF?</h2>
          <div className="space-y-2">
            {serviceNeeds.map(service => (
              <label key={service} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                {service}
              </label>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default IntakeForm;