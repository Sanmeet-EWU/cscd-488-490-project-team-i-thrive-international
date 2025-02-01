import React, { useState, ChangeEvent } from 'react';

interface HouseholdMember {
  fullName: string;
  relationship: string;
  dateOfBirth: string;
}

interface FormData {
  arrivalDate: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  emailAddress: string;
  householdMembers: HouseholdMember[];
  assistanceRequested: {
    housingSupport: boolean;
    healthcareAssistance: boolean;
    foodAssistance: boolean;
    employmentServices: boolean;
    childcareServices: boolean;
    transportationAssistance: boolean;
    other: boolean;
    otherDescription: string;
  };
  employmentStatus: string; // Updated for radio buttons
  employerName: string;
  employerAddress: string;
  employerPhoneNumber: string;
  position: string;
  monthlyIncome: string;
  additionalIncomeSource: string;
  additionalIncomeAmount: string;
  publicAssistance: string; // Updated for radio buttons
  publicAssistanceDetails: string;
  eligibilityDocuments: {
    i94: boolean;
    passport: boolean;
    ead: boolean;
    travelDocument: boolean;
    bankStatements: boolean;
    paystub: boolean;
  };
  printName: string;
  declarationDate: string;
}

const PCGAPRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    arrivalDate: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    emailAddress: '',
    householdMembers: [],
    assistanceRequested: {
      housingSupport: false,
      healthcareAssistance: false,
      foodAssistance: false,
      employmentServices: false,
      childcareServices: false,
      transportationAssistance: false,
      other: false,
      otherDescription: '',
    },
    employmentStatus: '', // Updated for radio buttons
    employerName: '',
    employerAddress: '',
    employerPhoneNumber: '',
    position: '',
    monthlyIncome: '',
    additionalIncomeSource: '',
    additionalIncomeAmount: '',
    publicAssistance: '', // Updated for radio buttons
    publicAssistanceDetails: '',
    eligibilityDocuments: {
      i94: false,
      passport: false,
      ead: false,
      travelDocument: false,
      bankStatements: false,
      paystub: false,
    },
    printName: '',
    declarationDate: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    if (name.includes('.')) {
      const [section, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...(prev[section as keyof FormData] as object),
          [field]: type === 'checkbox' ? checked : value,
        },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' || type === 'radio' ? value : value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Registration for Preferred Communities (PC) GAP Program
      </h1>
      <p className="text-gray-700 text-center mb-6">
        Enrollment in GAPS requires assessment(s) including a comprehensive intake assessment to be
        conducted at enrollment. This program is funded by the U.S. government through the Office of Refugee
        Resettlement (ORR).
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Arrival in United States</label>
            <input
              type="date"
              name="arrivalDate"
              value={formData.arrivalDate}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Address Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Street</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Household Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Household Information</h2>
          {formData.householdMembers.map((member, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name={`householdMembers[${index}].fullName`}
                  value={member.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Relationship</label>
                <input
                  type="text"
                  name={`householdMembers[${index}].relationship`}
                  value={member.relationship}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name={`householdMembers[${index}].dateOfBirth`}
                  value={member.dateOfBirth}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              setFormData(prev => ({
                ...prev,
                householdMembers: [
                  ...prev.householdMembers,
                  { fullName: '', relationship: '', dateOfBirth: '' },
                ],
              }))
            }
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Add Household Member
          </button>
        </div>

        {/* Assistance Requested */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Type of Assistance Requested</h2>
          {[
            ['housingSupport', 'Housing Support'],
            ['healthcareAssistance', 'Healthcare Assistance'],
            ['foodAssistance', 'Food Assistance'],
            ['employmentServices', 'Employment Services'],
            ['childcareServices', 'Childcare Services'],
            ['transportationAssistance', 'Transportation Assistance'],
            ['other', 'Other'],
          ].map(([key, label]) => (
            <label key={key} className="flex items-center">
              <input
                type="checkbox"
                name={`assistanceRequested.${key}`}
                checked={formData.assistanceRequested[key as keyof typeof formData.assistanceRequested] as boolean}
                onChange={handleChange}
                className="mr-2"
              />
              {label}
            </label>
          ))}
          {formData.assistanceRequested.other && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Other Description</label>
              <input
                type="text"
                name="assistanceRequested.otherDescription"
                value={formData.assistanceRequested.otherDescription}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          )}
        </div>

        {/* Employment and Income Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Employment and Income Information</h2>

          {/* Employment Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Employment Status</label>
            <div className="mt-2 space-y-2">
              {[
                ['Employed', 'Employed'],
                ['Unemployed', 'Unemployed'],
                ['SelfEmployed', 'Self-Employed'],
              ].map(([key, label]) => (
                <label key={key} className="flex items-center">
                  <input
                    type="radio"
                    name="employmentStatus"
                    value={key}
                    checked={formData.employmentStatus === key}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          {/* Employer Information (if applicable) */}
          {formData.employmentStatus === 'Employed' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Employer Name</label>
                <input
                  type="text"
                  name="employerName"
                  value={formData.employerName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Employer Address</label>
                <input
                  type="text"
                  name="employerAddress"
                  value={formData.employerAddress}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Employer Phone Number</label>
                <input
                  type="tel"
                  name="employerPhoneNumber"
                  value={formData.employerPhoneNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Position</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Monthly Income</label>
                <input
                  type="text"
                  name="monthlyIncome"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          )}

          {/* Additional Income (if applicable) */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Additional Income Source</label>
              <input
                type="text"
                name="additionalIncomeSource"
                value={formData.additionalIncomeSource}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Additional Income Amount</label>
              <input
                type="text"
                name="additionalIncomeAmount"
                value={formData.additionalIncomeAmount}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* Public Assistance */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Do you currently receive any public assistance?
            </label>
            <div className="mt-2 space-y-2">
              {[
                ['Yes', 'Yes'],
                ['No', 'No'],
              ].map(([key, label]) => (
                <label key={key} className="flex items-center">
                  <input
                    type="radio"
                    name="publicAssistance"
                    value={key}
                    checked={formData.publicAssistance === key}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {label}
                </label>
              ))}
            </div>
            {formData.publicAssistance === 'Yes' && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">If yes, please specify</label>
                <input
                  type="text"
                  name="publicAssistanceDetails"
                  value={formData.publicAssistanceDetails}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            )}
          </div>
        </div>

        {/* Eligibility Documents */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Eligibility and Requirements Document</h2>
          {[
            ['i94', 'I-94'],
            ['passport', 'Passport'],
            ['ead', 'Employment Authorization (EAD)'],
            ['travelDocument', 'Travel Document for Ukrainian Parolees'],
            ['bankStatements', 'Current Bank Statements (if applicable)'],
            ['paystub', 'Paystub (if applicable)'],
          ].map(([key, label]) => (
            <label key={key} className="flex items-center">
              <input
                type="checkbox"
                name={`eligibilityDocuments.${key}`}
                checked={formData.eligibilityDocuments[key as keyof typeof formData.eligibilityDocuments] as boolean}
                onChange={handleChange}
                className="mr-2"
              />
              {label}
            </label>
          ))}
        </div>

        {/* Declaration Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Declaration</h2>
          <p className="text-gray-700">
            I declare that the information provided in this application is true and correct to the best
            of my knowledge. I understand that any false statements or omissions may result in the
            denial of my request for assistance.
          </p>
          <p className="text-gray-700">
            If you arrive in the United States after September 30, 2023, you will be given priority on
            our contact list. We will try to get back to you within 30 days of receiving your
            application.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Print Name Here</label>
              <input
                type="text"
                name="printName"
                value={formData.printName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                name="declarationDate"
                value={formData.declarationDate}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PCGAPRegistrationForm;