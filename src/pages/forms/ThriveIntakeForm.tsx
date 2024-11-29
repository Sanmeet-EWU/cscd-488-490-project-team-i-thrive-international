import React, { useState, ChangeEvent } from 'react';

interface PersonalInfo {
  name: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  countryOfOrigin: string;
  phoneNumber: string;
  emailAddress: string;
  address: string;
}

interface ORIA {
  checked: boolean;
  affordableHousing: boolean;
  teenKidCloset: boolean;
  medical: boolean;
  other: boolean;
}

interface EMM {
  checked: boolean;
}

interface InternalReferral {
  checked: boolean;
  economicEmpowerment: boolean;
  womensEmpowerment: boolean;
  youthEmpowerment: boolean;
}

interface ServicesNeeded {
  housing: boolean;
  employmentFinancials: boolean;
  medical: boolean;
  assistanceServices: boolean;
  other: boolean;
}

interface ProgramEligibility {
  receivingServices: boolean;
  isOver16: boolean;
  livesInWashington: boolean;
  arrivedAfterJuly2021: boolean;
  hasApprovedStatus: boolean;
  completedConsentForm: boolean;
  completedReleaseForm: boolean;
  hasCopyOfStatus: boolean;
}

interface FormData {
  intakeDate: string;
  navigatorName: string;
  oria: ORIA;
  emm: EMM;
  internalReferral: InternalReferral;
  personalInfo: PersonalInfo;
  immigrationStatus: string;
  dateGranted: string;
  alienNumber: string;
  eligibilityDate: string;
  programEligibility: ProgramEligibility;
  servicesNeeded: ServicesNeeded;
}

const ThriveIntakeForm = () => {
  const [formData, setFormData] = useState<FormData>({
    intakeDate: '',
    navigatorName: '',
    oria: {
      checked: false,
      affordableHousing: false,
      teenKidCloset: false,
      medical: false,
      other: false
    },
    emm: {
      checked: false
    },
    internalReferral: {
      checked: false,
      economicEmpowerment: false,
      womensEmpowerment: false,
      youthEmpowerment: false
    },
    personalInfo: {
      name: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      countryOfOrigin: '',
      phoneNumber: '',
      emailAddress: '',
      address: ''
    },
    immigrationStatus: '',
    dateGranted: '',
    alienNumber: '',
    eligibilityDate: '',
    programEligibility: {
      receivingServices: false,
      isOver16: false,
      livesInWashington: false,
      arrivedAfterJuly2021: false,
      hasApprovedStatus: false,
      completedConsentForm: false,
      completedReleaseForm: false,
      hasCopyOfStatus: false
    },
    servicesNeeded: {
      housing: false,
      employmentFinancials: false,
      medical: false,
      assistanceServices: false,
      other: false
    }
  });

  const immigrationStatuses = [
    'Refugee',
    'Asylum (Approved and granted)',
    'Cuban and Haitian entrants',
    'Amerasians',
    'Certified victims of human trafficking',
    'Iraqi and Afghan Special Immigrants',
    'Afghan Humanitarian Parolees',
    'Afghans with Special Immigrant Parole (SI/SQ Parole) or Special Immigrant Conditional Permanent Residents (SI CPR)',
    'Ukrainian Humanitarian Parolees'
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    if (name.includes('.')) {
      const [section, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...(prev[section as keyof FormData] as object),
          [field]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">INTAKE/REGISTRATION FORM</h1>

      <form className="space-y-8">
        {/* Page 1 */}
        <div className="space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Intake Date</label>
              <input
                type="date"
                name="intakeDate"
                value={formData.intakeDate}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Navigator Name</label>
              <input
                type="text"
                name="navigatorName"
                value={formData.navigatorName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          {/* ORIA Section */}
          <div className="border p-4 rounded">
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                name="oria.checked"
                checked={formData.oria.checked}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="font-medium">ORIA</span>
            </label>
            <div className="ml-6 space-y-2">
              {(['affordableHousing', 'teenKidCloset', 'medical', 'other'] as const).map(item => (
                <label key={item} className="flex items-center">
                  <input
                    type="checkbox"
                    name={`oria.${item}`}
                    checked={formData.oria[item]}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}
                </label>
              ))}
            </div>
          </div>

          {/* Participant Information */}
          <div className="border p-4 rounded">
            <h2 className="font-bold mb-4">PARTICIPANT INFORMATION</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(Object.keys(formData.personalInfo) as Array<keyof PersonalInfo>).map(field => (
                <div key={field}>
                  <label className="block text-sm font-medium mb-1">
                    {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                  </label>
                  <input
                    type={field.includes('date') ? 'date' : field.includes('email') ? 'email' : 'text'}
                    name={`personalInfo.${field}`}
                    value={formData.personalInfo[field]}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Page 2 */}
        <div className="space-y-6">
          {/* Immigration Status */}
          <div className="border p-4 rounded">
            <h2 className="font-bold mb-4">CURRENT IMMIGRATION STATUS</h2>
            <div className="space-y-2">
              {immigrationStatuses.map(status => (
                <label key={status} className="flex items-center">
                  <input
                    type="radio"
                    name="immigrationStatus"
                    value={status}
                    checked={formData.immigrationStatus === status}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {status}
                </label>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium mb-1">Date Granted</label>
                <input
                  type="date"
                  name="dateGranted"
                  value={formData.dateGranted}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Alien #</label>
                <input
                  type="text"
                  name="alienNumber"
                  value={formData.alienNumber}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Eligibility Date</label>
                <input
                  type="date"
                  name="eligibilityDate"
                  value={formData.eligibilityDate}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Program Eligibility */}
          <div className="border p-4 rounded">
            <h2 className="font-bold mb-4">PROGRAM ELIGIBILITY DETERMINATION (DSHS ONLY)</h2>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="programEligibility.receivingServices"
                  checked={formData.programEligibility.receivingServices}
                  onChange={handleChange}
                  className="mr-2"
                />
                Is participant receiving services from resettlement agencies?
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="programEligibility.isOver16"
                  checked={formData.programEligibility.isOver16}
                  onChange={handleChange}
                  className="mr-2"
                />
                Is participant 16 years of age or older?
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="programEligibility.livesInWashington"
                  checked={formData.programEligibility.livesInWashington}
                  onChange={handleChange}
                  className="mr-2"
                />
                Does participant live in Washington?
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="programEligibility.arrivedAfterJuly2021"
                  checked={formData.programEligibility.arrivedAfterJuly2021}
                  onChange={handleChange}
                  className="mr-2"
                />
                Did participant arrive after July 1, 2021?
              </label>
            </div>
          </div>

          {/* Services Needed */}
          <div className="border p-4 rounded">
            <h2 className="font-bold mb-4">WHAT SERVICES IS PARTICIPANT IN NEED OF?</h2>
            <div className="space-y-2">
              {(Object.keys(formData.servicesNeeded) as Array<keyof ServicesNeeded>).map(service => (
                <label key={service} className="flex items-center">
                  <input
                    type="checkbox"
                    name={`servicesNeeded.${service}`}
                    checked={formData.servicesNeeded[service]}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {service.charAt(0).toUpperCase() + service.slice(1).replace(/([A-Z])/g, ' $1')}
                </label>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ThriveIntakeForm;