import React, { useState, ChangeEvent } from 'react';

interface ThriveIntakeFormData {
  intakeDate: string;
  navigatorName: string;
  programType: {
    ORIA: boolean;
    EMM: boolean;
    InternalReferral: boolean;
    ORIAOptions: string[]; // Sub-options for ORIA
    InternalReferralOptions: string[]; // Sub-options for Internal Referral
  };
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  countryOfOrigin: string;
  phoneNumber: string;
  emailAddress: string;
  address: string;
  immigrationStatus: string[];
  asylumDateGranted: string; 
  alienNumber: string;
  eligibilityDate: string;
  programEligibility: {
    receivingServices: boolean | undefined;
    ageOver16: boolean | undefined;
    livesInWashington: boolean | undefined;
    arrivedAfterJuly2021: boolean | undefined;
    approvedImmigrationStatus: boolean | undefined;
    consentFormCompleted: boolean | undefined;
    releaseFormCompleted: boolean | undefined;
    immigrationStatusCopy: boolean | undefined;
  }
  servicesNeeded: string[];
}

const ThriveIntakeForm: React.FC = () => {
  const [formData, setFormData] = useState<ThriveIntakeFormData>({
    intakeDate: '',
    navigatorName: '',
    programType: {
      ORIA: false,
      EMM: false,
      InternalReferral: false,
      ORIAOptions: [],
      InternalReferralOptions: [],
    },
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    countryOfOrigin: '',
    phoneNumber: '',
    emailAddress: '',
    address: '',
    immigrationStatus: [],
    asylumDateGranted: '',
    alienNumber: '',
    eligibilityDate: '',
    programEligibility: {
      receivingServices: undefined,
      ageOver16: undefined,
      livesInWashington: undefined,
      arrivedAfterJuly2021: undefined,
      approvedImmigrationStatus: undefined,
      consentFormCompleted: undefined,
      releaseFormCompleted: undefined,
      immigrationStatusCopy: undefined,
    },
    servicesNeeded: [],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
  
    if (type === 'checkbox') {
      if (name === 'immigrationStatus') {
        setFormData((prev) => ({
          ...prev,
          immigrationStatus: checked
            ? [...prev.immigrationStatus, value]
            : prev.immigrationStatus.filter((item) => item !== value),
        }));
      } else if (name.startsWith('programType.')) {
        const field = name.split('.')[1];
        setFormData((prev) => ({
          ...prev,
          programType: {
            ...prev.programType,
            [field]: checked,
          },
        }));
      } else if (name === 'servicesNeeded') {
        setFormData((prev) => ({
          ...prev,
          servicesNeeded: checked
            ? [...prev.servicesNeeded, value]
            : prev.servicesNeeded.filter((item) => item !== value),
        }));
      } else if (name.endsWith('.yes')) {
        const field = name.replace('.yes', '');
        setFormData((prev) => ({
          ...prev,
          programEligibility: {
            ...prev.programEligibility,
            [field]: true,
          },
        }));
      } else if (name.endsWith('.no')) {
        const field = name.replace('.no', '');
        setFormData((prev) => ({
          ...prev,
          programEligibility: {
            ...prev.programEligibility,
            [field]: false,
          },
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Thrive Intake Form Data:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Thrive International Intake/Registration Form
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Intake Date and Navigator Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Intake Date
            </label>
            <input
              type="date"
              name="intakeDate"
              value={formData.intakeDate}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Navigator Name
            </label>
            <input
              type="text"
              name="navigatorName"
              value={formData.navigatorName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        {/* Program Type */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Program Type
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="programType.ORIA"
                checked={formData.programType.ORIA}
                onChange={handleChange}
                className="mr-2"
              />
              ORIA
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="programType.EMM"
                checked={formData.programType.EMM}
                onChange={handleChange}
                className="mr-2"
              />
              EMM
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="programType.InternalReferral"
                checked={formData.programType.InternalReferral}
                onChange={handleChange}
                className="mr-2"
              />
              Internal Referral
            </label>
          </div>

          {/* ORIA Sub-Options */}
          {formData.programType.ORIA && (
            <div className="ml-6 space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                ORIA Options
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Affordable Housing', 'Teen & Kid Closet', 'Medical', 'Other'].map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      name={`ORIAOptions.${option}`}
                      checked={formData.programType.ORIAOptions.includes(option)}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Internal Referral Sub-Options */}
          {formData.programType.InternalReferral && (
            <div className="ml-6 space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Internal Referral Options
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Economic Empowerment', 'Women\'s Empowerment', 'Youth Empowerment'].map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      name={`InternalReferralOptions.${option}`}
                      checked={formData.programType.InternalReferralOptions.includes(option)}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Participant Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Participant Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country of Origin
              </label>
              <input
                type="text"
                name="countryOfOrigin"
                value={formData.countryOfOrigin}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
        </div>

{/* Current Immigration Status */}
<div className="space-y-4">
  <h2 className="text-xl font-bold">Current Immigration Status</h2>
  <div className="space-y-2">
    {[
      'Refugee',
      'Asylum (Approved and granted)',
      'Cuban and Haitian entrants',
      'Amerasians',
      'Certified victims of human trafficking',
      'Iraqi and Afghan Special Immigrants',
      'Afghan Humanitarian Parolees',
      'Afghans with Special Immigrant Parole (SI/SQ Parole) or Special Immigrant Conditional Permanent Residents (SI CPR)',
      'Ukrainian Humanitarian Parolees',
    ].map((status) => (
      <div key={status}>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="immigrationStatus"
            value={status}
            checked={formData.immigrationStatus.includes(status)}
            onChange={handleChange}
            className="mr-2"
          />
          {status}
        </label>
        {/* Additional input for Asylum Date Granted */}
        {status === 'Asylum (Approved and granted)' && formData.immigrationStatus.includes(status) && (
          <div className="ml-6 mt-2">
            <label className="block text-sm font-medium text-gray-700">
              Date granted
            </label>
            <input
              type="date"
              name="asylumDateGranted"
              value={formData.asylumDateGranted || ''}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        )}
      </div>
    ))}
  </div>
</div>

{/* Program Eligibility Determination (DSHS ONLY) */}
<div className="space-y-4">
  <h2 className="text-xl font-bold">Program Eligibility Determination (DSHS ONLY)</h2>
  <div className="space-y-4">
    {[
      {
        question: 'Is the participant receiving services from resettlement agencies, such as Reception and Placement, Matching Grant, and/or Preferred Community Programs?',
        field: 'receivingServices',
      },
      {
        question: 'Is the participant 16 years of age or older?',
        field: 'ageOver16',
      },
      {
        question: 'Does the participant live in Washington?',
        field: 'livesInWashington',
      },
      {
        question: 'Did the participant arrive in the United States on or after July 1, 2021?',
        field: 'arrivedAfterJuly2021',
      },
      {
        question: 'Does the participant have an approved immigration status?',
        field: 'approvedImmigrationStatus',
      },
      {
        question: 'Completed Consent Form:',
        field: 'consentFormCompleted',
      },
      {
        question: 'Completed Release of information (Thrive and DSHS)',
        field: 'releaseFormCompleted',
      },
      {
        question: 'Is a copy of the immigration status collected and kept in the participant\'s file?',
        field: 'immigrationStatusCopy',
      },
    ].map((item) => (
      <div key={item.field} className="space-y-2">
        <p className="text-sm font-medium text-gray-700">{item.question}</p>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name={`${item.field}.yes`}
              checked={formData.programEligibility[item.field as keyof typeof formData.programEligibility] === true}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name={`${item.field}.no`}
              checked={formData.programEligibility[item.field as keyof typeof formData.programEligibility] === false}
              onChange={handleChange}
              className="mr-2"
            />
            No
          </label>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Services Needed */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">What Services is Participant in Need Of?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="servicesNeeded"
                value="Housing"
                checked={formData.servicesNeeded.includes('Housing')}
                onChange={handleChange}
                className="mr-2"
              />
              Housing
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="servicesNeeded"
                value="Employment/Financials"
                checked={formData.servicesNeeded.includes('Employment/Financials')}
                onChange={handleChange}
                className="mr-2"
              />
              Employment/Financials
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="servicesNeeded"
                value="Medical"
                checked={formData.servicesNeeded.includes('Medical')}
                onChange={handleChange}
                className="mr-2"
              />
              Medical
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="servicesNeeded"
                value="Assistance Services"
                checked={formData.servicesNeeded.includes('Assistance Services')}
                onChange={handleChange}
                className="mr-2"
              />
              Assistance Services
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="servicesNeeded"
                value="Other"
                checked={formData.servicesNeeded.includes('Other')}
                onChange={handleChange}
                className="mr-2"
              />
              Other
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ThriveIntakeForm;