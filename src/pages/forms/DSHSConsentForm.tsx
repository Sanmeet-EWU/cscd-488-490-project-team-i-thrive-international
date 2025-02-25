<<<<<<< Updated upstream
<<<<<<< Updated upstream
import React, { useState, ChangeEvent } from 'react';

interface ClientInfo {
=======
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface DSHSConsentFormData {
>>>>>>> Stashed changes
=======
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface DSHSConsentFormData {
>>>>>>> Stashed changes
  name: string;
  dateOfBirth: string;
  identificationNumber: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  telephone: string;
  otherInformation: string;
}

interface FormData {
  clientInfo: ClientInfo;
}

const DSHSConsentForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    clientInfo: {
      name: '',
      dateOfBirth: '',
      identificationNumber: '',
      address: '',
      city: '',
      state: 'Washington',
      zipCode: '',
      telephone: '',
      otherInformation: '',
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      clientInfo: {
        ...prev.clientInfo,
        [name]: value,
      },
    }));
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img src="/path-to-dshs-logo.png" alt="DSHS Logo" style={{ height: '60px' }} />
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '20px 0' }}>Consent</h1>
      </div>

      <form style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        {/* Client Identification */}
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '5px', marginBottom: '15px' }}>
            Client Identification
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '15px' }}>
            <input
              type="text"
              name="name"
              value={formData.clientInfo.name}
              onChange={handleChange}
              placeholder="NAME"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
            <input
              type="date"
              name="dateOfBirth"
              value={formData.clientInfo.dateOfBirth}
              onChange={handleChange}
              placeholder="DATE OF BIRTH"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
            <input
              type="text"
              name="identificationNumber"
              value={formData.clientInfo.identificationNumber}
              onChange={handleChange}
              placeholder="IDENTIFICATION NUMBER"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '15px', marginTop: '15px' }}>
            <input
              type="text"
              name="address"
              value={formData.clientInfo.address}
              onChange={handleChange}
              placeholder="ADDRESS"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
            <input
              type="text"
              name="city"
              value={formData.clientInfo.city}
              onChange={handleChange}
              placeholder="CITY"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
            <input
              type="text"
              name="state"
              value={formData.clientInfo.state}
              onChange={handleChange}
              placeholder="STATE"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
            <input
              type="text"
              name="zipCode"
              value={formData.clientInfo.zipCode}
              onChange={handleChange}
              placeholder="ZIP CODE"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>

          <div style={{ marginTop: '15px' }}>
            <input
              type="text"
              name="telephone"
              value={formData.clientInfo.telephone}
              onChange={handleChange}
              placeholder="TELEPHONE NUMBER (INCLUDE AREA CODE)"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>

          <div style={{ marginTop: '15px' }}>
            <textarea
              name="otherInformation"
              value={formData.clientInfo.otherInformation}
              onChange={handleChange}
              placeholder="OTHER INFORMATION"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                height: '100px',
              }}
=======
  telephoneNumber: string;
  otherInformation: string;
  consent: {
    useWithinDSHS: boolean;
    discloseToAgencies: boolean;
    healthCareProviders: boolean;
    mentalHealthCareProviders: boolean;
    substanceUseDisorderProviders: boolean;
    otherDSHSContractedProviders: boolean;
    housingPrograms: boolean;
    schoolDistrictsOrColleges: boolean;
    departmentOfCorrections: boolean;
    employmentSecurityDepartment: boolean;
    socialSecurityAdministration: boolean;
    otherAgencies: boolean;
    otherAgenciesList: string;
  };
  reasonForDisclosure: string;
  recordsToShare: {
    allRecords: boolean;
    recordsOnAttachedList: boolean;
    specificRecords: boolean;
    familySocialEmploymentHistory: boolean;
    treatmentCarePlans: boolean;
    paymentRecords: boolean;
    individualAssessments: boolean;
    schoolEducationTraining: boolean;
    mentalHealthCareInformation: boolean;
    healthCareInformation: boolean;
    otherRecords: boolean;
    otherRecordsList: string;
  };
  additionalRecords: {
    mentalHealth: boolean;
    hivAidsStd: boolean;
    substanceUseDisorder: boolean;
  };
  consentExpiration: string;
  signature: string;
  signatureDate: string;
  witnessNotarySignature: string;
  witnessNotaryName: string;
  witnessNotaryDate: string;
  parentRepresentativeSignature: string;
  parentRepresentativePhone: string;
  parentRepresentativeDate: string;
  parentRepresentativeAuthority: string;
=======
  telephoneNumber: string;
  otherInformation: string;
>>>>>>> Stashed changes
}

const DSHSConsentForm: React.FC = () => {
  const [formData, setFormData] = useState<DSHSConsentFormData>({
    name: '',
    dateOfBirth: '',
    identificationNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    telephoneNumber: '',
    otherInformation: '',
<<<<<<< Updated upstream
    consent: {
      useWithinDSHS: false,
      discloseToAgencies: false,
      healthCareProviders: false,
      mentalHealthCareProviders: false,
      substanceUseDisorderProviders: false,
      otherDSHSContractedProviders: false,
      housingPrograms: false,
      schoolDistrictsOrColleges: false,
      departmentOfCorrections: false,
      employmentSecurityDepartment: false,
      socialSecurityAdministration: false,
      otherAgencies: false,
      otherAgenciesList: '',
    },
    reasonForDisclosure: '',
    recordsToShare: {
      allRecords: false,
      recordsOnAttachedList: false,
      specificRecords: false,
      familySocialEmploymentHistory: false,
      treatmentCarePlans: false,
      paymentRecords: false,
      individualAssessments: false,
      schoolEducationTraining: false,
      mentalHealthCareInformation: false,
      healthCareInformation: false,
      otherRecords: false,
      otherRecordsList: '',
    },
    additionalRecords: {
      mentalHealth: false,
      hivAidsStd: false,
      substanceUseDisorder: false,
    },
    consentExpiration: '',
    signature: '',
    signatureDate: '',
    witnessNotarySignature: '',
    witnessNotaryName: '',
    witnessNotaryDate: '',
    parentRepresentativeSignature: '',
    parentRepresentativePhone: '',
    parentRepresentativeDate: '',
    parentRepresentativeAuthority: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    if (name.startsWith('consent.')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        consent: {
          ...prev.consent,
          [field]: type === 'checkbox' ? checked : value,
        },
      }));
    } else if (name.startsWith('recordsToShare.')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        recordsToShare: {
          ...prev.recordsToShare,
          [field]: type === 'checkbox' ? checked : value,
        },
      }));
    } else if (name.startsWith('additionalRecords.')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        additionalRecords: {
          ...prev.additionalRecords,
          [field]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
=======
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
>>>>>>> Stashed changes
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('DSHS Consent Form Data:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">DSHS Consent Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Client Identification */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Client Identification</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
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
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Identification Number</label>
              <input
                type="text"
                name="identificationNumber"
                value={formData.identificationNumber}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
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
                required
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
                required
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
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Telephone Number</label>
              <input
                type="tel"
                name="telephoneNumber"
                value={formData.telephoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Other Information</label>
              <textarea
                name="otherInformation"
                value={formData.otherInformation}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

<<<<<<< Updated upstream
        {/* Consent Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Consent</h2>
          <div className="space-y-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="consent.useWithinDSHS"
                checked={formData.consent.useWithinDSHS}
                onChange={handleChange}
                className="mr-2"
              />
              I consent to the use of confidential information about me within DSHS.
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="consent.discloseToAgencies"
                checked={formData.consent.discloseToAgencies}
                onChange={handleChange}
                className="mr-2"
              />
              I grant permission to DSHS and the below-listed agencies to use and disclose my confidential information.
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="consent.healthCareProviders"
                  checked={formData.consent.healthCareProviders}
                  onChange={handleChange}
                  className="mr-2"
                />
                Health care providers
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="consent.mentalHealthCareProviders"
                  checked={formData.consent.mentalHealthCareProviders}
                  onChange={handleChange}
                  className="mr-2"
                />
                Mental health care providers
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="consent.substanceUseDisorderProviders"
                  checked={formData.consent.substanceUseDisorderProviders}
                  onChange={handleChange}
                  className="mr-2"
                />
                Substance use disorder service providers
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="consent.otherDSHSContractedProviders"
                  checked={formData.consent.otherDSHSContractedProviders}
                  onChange={handleChange}
                  className="mr-2"
                />
                Other DSHS contracted providers
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="consent.housingPrograms"
                  checked={formData.consent.housingPrograms}
                  onChange={handleChange}
                  className="mr-2"
                />
                Housing programs
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="consent.schoolDistrictsOrColleges"
                  checked={formData.consent.schoolDistrictsOrColleges}
                  onChange={handleChange}
                  className="mr-2"
                />
                School districts or colleges
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="consent.departmentOfCorrections"
                  checked={formData.consent.departmentOfCorrections}
                  onChange={handleChange}
                  className="mr-2"
                />
                Department of Corrections
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="consent.employmentSecurityDepartment"
                  checked={formData.consent.employmentSecurityDepartment}
                  onChange={handleChange}
                  className="mr-2"
                />
                Employment Security Department and its employment partners
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="consent.socialSecurityAdministration"
                  checked={formData.consent.socialSecurityAdministration}
                  onChange={handleChange}
                  className="mr-2"
                />
                Social Security Administration or other federal agency
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="consent.otherAgencies"
                  checked={formData.consent.otherAgencies}
                  onChange={handleChange}
                  className="mr-2"
                />
                Other (specify):
                <input
                  type="text"
                  name="consent.otherAgenciesList"
                  value={formData.consent.otherAgenciesList}
                  onChange={handleChange}
                  className="ml-2 p-1 border border-gray-300 rounded-md"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Reason for Disclosure */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Reason for Disclosure</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">Reason for disclosure:</label>
            <input
              type="text"
              name="reasonForDisclosure"
              value={formData.reasonForDisclosure}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
>>>>>>> Stashed changes
            />
          </div>
        </div>

<<<<<<< Updated upstream
        <button
          type="submit"
          style={{
            backgroundColor: '#0066cc',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            float: 'right',
          }}
        >
          Submit Consent Form
        </button>
=======
        {/* Records to Share */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Records to Share</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="recordsToShare.allRecords"
                checked={formData.recordsToShare.allRecords}
                onChange={handleChange}
                className="mr-2"
              />
              All my client records
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="recordsToShare.recordsOnAttachedList"
                checked={formData.recordsToShare.recordsOnAttachedList}
                onChange={handleChange}
                className="mr-2"
              />
              Records on attached list
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="recordsToShare.specificRecords"
                checked={formData.recordsToShare.specificRecords}
                onChange={handleChange}
                className="mr-2"
              />
              Only the following records
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="recordsToShare.familySocialEmploymentHistory"
                checked={formData.recordsToShare.familySocialEmploymentHistory}
                onChange={handleChange}
                className="mr-2"
              />
              Family, social, and employment history
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="recordsToShare.treatmentCarePlans"
                checked={formData.recordsToShare.treatmentCarePlans}
                onChange={handleChange}
                className="mr-2"
              />
              Treatment or care plans
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="recordsToShare.paymentRecords"
                checked={formData.recordsToShare.paymentRecords}
                onChange={handleChange}
                className="mr-2"
              />
              Payment records
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="recordsToShare.individualAssessments"
                checked={formData.recordsToShare.individualAssessments}
                onChange={handleChange}
                className="mr-2"
              />
              Individual assessments
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="recordsToShare.schoolEducationTraining"
                checked={formData.recordsToShare.schoolEducationTraining}
                onChange={handleChange}
                className="mr-2"
              />
              School, education, and training
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="recordsToShare.mentalHealthCareInformation"
                checked={formData.recordsToShare.mentalHealthCareInformation}
                onChange={handleChange}
                className="mr-2"
              />
              Mental health care information (specify):
              <input
                type="text"
                name="recordsToShare.mentalHealthCareInformation"
                value={formData.recordsToShare.mentalHealthCareInformation ? 'true' : ''}
                onChange={handleChange}
                className="ml-2 p-1 border border-gray-300 rounded-md"
              />
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="recordsToShare.healthCareInformation"
                checked={formData.recordsToShare.healthCareInformation}
                onChange={handleChange}
                className="mr-2"
              />
              Health care information (specify):
              <input
                type="text"
                name="recordsToShare.healthCareInformation"
                value={formData.recordsToShare.healthCareInformation ? 'true' : ''}
                onChange={handleChange}
                className="ml-2 p-1 border border-gray-300 rounded-md"
              />
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="recordsToShare.otherRecords"
                checked={formData.recordsToShare.otherRecords}
                onChange={handleChange}
                className="mr-2"
              />
              Other (list):
              <input
                type="text"
                name="recordsToShare.otherRecordsList"
                value={formData.recordsToShare.otherRecordsList}
                onChange={handleChange}
                className="ml-2 p-1 border border-gray-300 rounded-md"
              />
            </label>
          </div>
        </div>

        {/* Additional Records */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Additional Records</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="additionalRecords.mentalHealth"
                checked={formData.additionalRecords.mentalHealth}
                onChange={handleChange}
                className="mr-2"
              />
              Mental health
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="additionalRecords.hivAidsStd"
                checked={formData.additionalRecords.hivAidsStd}
                onChange={handleChange}
                className="mr-2"
              />
              HIV/AIDS and STD test results, diagnosis, or treatment
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="additionalRecords.substanceUseDisorder"
                checked={formData.additionalRecords.substanceUseDisorder}
                onChange={handleChange}
                className="mr-2"
              />
              Substance Use Disorder
            </label>
          </div>
        </div>

        {/* Consent Expiration */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Consent Expiration</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">Consent is valid for one year or until:</label>
            <input
              type="date"
              name="consentExpiration"
              value={formData.consentExpiration}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Signatures */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Signatures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Client Signature</label>
              <input
                type="text"
                name="signature"
                value={formData.signature}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                name="signatureDate"
                value={formData.signatureDate}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Witness/Notary Signature</label>
              <input
                type="text"
                name="witnessNotarySignature"
                value={formData.witnessNotarySignature}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Witness/Notary Printed Name</label>
              <input
                type="text"
                name="witnessNotaryName"
                value={formData.witnessNotaryName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                name="witnessNotaryDate"
                value={formData.witnessNotaryDate}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Parent/Representative Signature</label>
              <input
                type="text"
                name="parentRepresentativeSignature"
                value={formData.parentRepresentativeSignature}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Telephone Number</label>
              <input
                type="tel"
                name="parentRepresentativePhone"
                value={formData.parentRepresentativePhone}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                name="parentRepresentativeDate"
                value={formData.parentRepresentativeDate}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Parent/Representative Authority</label>
              <input
                type="text"
                name="parentRepresentativeAuthority"
                value={formData.parentRepresentativeAuthority}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

=======
>>>>>>> Stashed changes
        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Submit
          </button>
        </div>
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      </form>
    </div>
  );
};

<<<<<<< Updated upstream
<<<<<<< Updated upstream
export default DSHSConsentForm;
=======
export default DSHSConsentForm;
>>>>>>> Stashed changes
=======
export default DSHSConsentForm;
>>>>>>> Stashed changes
