import React, { useState, ChangeEvent } from 'react';

interface CommunityOutreachFormData {
  organizationName: string;
  navigatorName: string;
  intakeDate: string;
  participant: {
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    gender: string;
    countryOfOrigin: string;
    preferredLanguage: string;
    phoneNumber: string;
    email: string;
    streetAddress: string;
    city: string;
    zipCode: string;
    state: string;
    county: string;
    mailingAddress: string;
    sameAsResidential: boolean;
    dshsClientId: string;
    alienNumber: string;
    isHeadOfHousehold: boolean;
    relationshipToHead: string;
  };
  immigrationStatus: string;
  eligibilityDate: string;
  programEligibility: {
    receivingServices: boolean;
    ageOver16: boolean;
    livesInWashington: boolean;
    arrivedAfterJuly2021: boolean;
    approvedImmigrationStatus: boolean;
    eligibleForServices: boolean;
    immigrationStatusCopy: boolean;
    consentFormCompleted: boolean;
    releaseFormCompleted: boolean;
  };
  householdMembers: Array<{
    name: string;
    dateOfBirth: string;
    relationship: string;
    immigrationStatus: string;
    intakeEligibilityNeeds: string;
  }>;
<<<<<<< Updated upstream
  serviceSummary: Array<{
=======
  servicesProvided: Array<{
>>>>>>> Stashed changes
    service: string;
    date: string;
    nextStep: string;
    notes: string;
  }>;
<<<<<<< Updated upstream
=======
  servicesNeeded: string[];
>>>>>>> Stashed changes
  otherServiceDescription: string;
}

const CommunityOutreachAndEducation: React.FC = () => {
  const [formData, setFormData] = useState<CommunityOutreachFormData>({
    organizationName: '',
    navigatorName: '',
    intakeDate: '',
    participant: {
      firstName: '',
      middleName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      countryOfOrigin: '',
      preferredLanguage: '',
      phoneNumber: '',
      email: '',
      streetAddress: '',
      city: '',
      zipCode: '',
      state: 'Washington',
      county: '',
      mailingAddress: '',
      sameAsResidential: false,
      dshsClientId: '',
      alienNumber: '',
      isHeadOfHousehold: false,
      relationshipToHead: '',
    },
    immigrationStatus: '',
    eligibilityDate: '',
    programEligibility: {
      receivingServices: false,
      ageOver16: false,
      livesInWashington: false,
      arrivedAfterJuly2021: false,
      approvedImmigrationStatus: false,
      eligibleForServices: false,
      immigrationStatusCopy: false,
      consentFormCompleted: false,
      releaseFormCompleted: false,
    },
    householdMembers: [],
<<<<<<< Updated upstream
    serviceSummary: [],
=======
    servicesProvided: [],
    servicesNeeded: [],
>>>>>>> Stashed changes
    otherServiceDescription: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
<<<<<<< Updated upstream

=======
  
>>>>>>> Stashed changes
    if (name.startsWith('participant.')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        participant: {
          ...prev.participant,
          [field]: type === 'checkbox' ? checked : value,
        },
      }));
    } else if (name.startsWith('programEligibility.')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        programEligibility: {
          ...prev.programEligibility,
          [field]: checked,
        },
      }));
<<<<<<< Updated upstream
=======
    } else if (name === 'servicesNeeded') {
      setFormData((prev) => ({
        ...prev,
        servicesNeeded: checked
          ? [...prev.servicesNeeded, value]
          : prev.servicesNeeded.filter((item) => item !== value),
      }));
>>>>>>> Stashed changes
    } else if (name === 'immigrationStatus') {
      setFormData((prev) => ({
        ...prev,
        immigrationStatus: checked ? value : '',
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleHouseholdMemberChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedHouseholdMembers = [...formData.householdMembers];
    updatedHouseholdMembers[index] = {
      ...updatedHouseholdMembers[index],
      [name]: value,
    };
    setFormData((prev) => ({
      ...prev,
      householdMembers: updatedHouseholdMembers,
    }));
  };

  const addHouseholdMember = () => {
    setFormData((prev) => ({
      ...prev,
      householdMembers: [
        ...prev.householdMembers,
        {
          name: '',
          dateOfBirth: '',
          relationship: '',
          immigrationStatus: '',
          intakeEligibilityNeeds: '',
        },
      ],
    }));
  };

  const removeHouseholdMember = (index: number) => {
    const updatedHouseholdMembers = formData.householdMembers.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      householdMembers: updatedHouseholdMembers,
    }));
  };

<<<<<<< Updated upstream
  const handleServiceSummaryChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedServiceSummary = [...formData.serviceSummary];
    updatedServiceSummary[index] = {
      ...updatedServiceSummary[index],
=======
  const handleServiceProvidedChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedServicesProvided = [...formData.servicesProvided];
    updatedServicesProvided[index] = {
      ...updatedServicesProvided[index],
>>>>>>> Stashed changes
      [name]: value,
    };
    setFormData((prev) => ({
      ...prev,
<<<<<<< Updated upstream
      serviceSummary: updatedServiceSummary,
    }));
  };

  const addServiceSummary = () => {
    setFormData((prev) => ({
      ...prev,
      serviceSummary: [
        ...prev.serviceSummary,
=======
      servicesProvided: updatedServicesProvided,
    }));
  };

  const addServiceProvided = () => {
    setFormData((prev) => ({
      ...prev,
      servicesProvided: [
        ...prev.servicesProvided,
>>>>>>> Stashed changes
        {
          service: '',
          date: '',
          nextStep: '',
          notes: '',
        },
      ],
    }));
  };

<<<<<<< Updated upstream
  const removeServiceSummary = (index: number) => {
    const updatedServiceSummary = formData.serviceSummary.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      serviceSummary: updatedServiceSummary,
=======
  const removeServiceProvided = (index: number) => {
    const updatedServicesProvided = formData.servicesProvided.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      servicesProvided: updatedServicesProvided,
>>>>>>> Stashed changes
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Community Outreach and Education Form Data:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Community Outreach and Education Intake/Registration Form
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Organization and Navigator Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Organization Name
            </label>
            <input
              type="text"
              name="organizationName"
              value={formData.organizationName}
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
                name="participant.firstName"
                value={formData.participant.firstName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Middle Name
              </label>
              <input
                type="text"
                name="participant.middleName"
                value={formData.participant.middleName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="participant.lastName"
                value={formData.participant.lastName}
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
                name="participant.dateOfBirth"
                value={formData.participant.dateOfBirth}
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
                name="participant.gender"
                value={formData.participant.gender}
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
                name="participant.countryOfOrigin"
                value={formData.participant.countryOfOrigin}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Language
              </label>
              <input
                type="text"
                name="participant.preferredLanguage"
                value={formData.participant.preferredLanguage}
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
                name="participant.phoneNumber"
                value={formData.participant.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="participant.email"
                value={formData.participant.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Street Address
              </label>
              <input
                type="text"
                name="participant.streetAddress"
                value={formData.participant.streetAddress}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                name="participant.city"
                value={formData.participant.city}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Zip Code
              </label>
              <input
                type="text"
                name="participant.zipCode"
                value={formData.participant.zipCode}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                State
              </label>
              <input
                type="text"
                name="participant.state"
                value={formData.participant.state}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                County
              </label>
              <input
                type="text"
                name="participant.county"
                value={formData.participant.county}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mailing Address
              </label>
              <input
                type="text"
                name="participant.mailingAddress"
                value={formData.participant.mailingAddress}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="participant.sameAsResidential"
                  checked={formData.participant.sameAsResidential}
                  onChange={handleChange}
                  className="mr-2"
                />
                Same as residential address
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                DSHS Client ID #
              </label>
              <input
                type="text"
                name="participant.dshsClientId"
                value={formData.participant.dshsClientId}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Alien #
              </label>
              <input
                type="text"
                name="participant.alienNumber"
                value={formData.participant.alienNumber}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
  <h2 className="text-xl font-bold">Current Immigration Status</h2>
  <div className="space-y-4">
    {/* Refugee */}
    <label className="flex items-start">
      <input
        type="checkbox"
        name="immigrationStatus"
        value="Refugee"
        checked={formData.immigrationStatus === "Refugee"}
        onChange={handleChange}
        className="mr-2 mt-1"
      />
      <div>
        <strong>Refugee</strong>
        <p className="text-sm text-gray-600">
          (Eligibility starts the date of entry into the United States; eligible for up to five years.)
        </p>
        <p className="text-sm text-gray-600">
          <strong>Eligibility Date:</strong> Date of arrival to the U.S., Month/Day/Year
        </p>
      </div>
    </label>

    {/* Asylum */}
    <label className="flex items-start">
      <input
        type="checkbox"
        name="immigrationStatus"
        value="Asylum"
        checked={formData.immigrationStatus === "Asylum"}
        onChange={handleChange}
        className="mr-2 mt-1"
      />
      <div>
        <strong>Asylum</strong>
        <p className="text-sm text-gray-600">
          (Approved and granted asylum by USCIS or DOJ. Eligibility starts from their date of approval; eligible for up to five years.)
        </p>
        <p className="text-sm text-gray-600">
          *An asylum-seeker is not eligible.*
        </p>
        <p className="text-sm text-gray-600">
          <strong>Eligibility Date:</strong> Date of approval for Asylum, Month/Day/Year
        </p>
      </div>
    </label>

    {/* Cuban and Haitian entrants */}
    <label className="flex items-start">
      <input
        type="checkbox"
        name="immigrationStatus"
        value="Cuban and Haitian entrants"
        checked={formData.immigrationStatus === "Cuban and Haitian entrants"}
        onChange={handleChange}
        className="mr-2 mt-1"
      />
      <div>
        <strong>Cuban and Haitian entrants</strong>
        <p className="text-sm text-gray-600">
          (Eligibility starts from the date of entry into the United States; eligible for up to five years.)
        </p>
        <p className="text-sm text-gray-600">
          <strong>Eligibility Date:</strong> Date of arrival to the U.S., Month/Day/Year
        </p>
      </div>
    </label>

    {/* Amerasians */}
    <label className="flex items-start">
      <input
        type="checkbox"
        name="immigrationStatus"
        value="Amerasians"
        checked={formData.immigrationStatus === "Amerasians"}
        onChange={handleChange}
        className="mr-2 mt-1"
      />
      <div>
        <strong>Amerasians</strong>
        <p className="text-sm text-gray-600">
          (Born in Vietnam after January 1, 1962 and before January 1, 1976 who was fathered by a US Citizen. Eligibility starts from the date of entry into the United States; eligible for up to five years.)
        </p>
        <p className="text-sm text-gray-600">
          <strong>Eligibility Date:</strong> Date of arrival to the U.S., Month/Day/Year
        </p>
      </div>
    </label>

    {/* Certified victims of human trafficking */}
    <label className="flex items-start">
      <input
        type="checkbox"
        name="immigrationStatus"
        value="Certified victims of human trafficking"
        checked={formData.immigrationStatus === "Certified victims of human trafficking"}
        onChange={handleChange}
        className="mr-2 mt-1"
      />
      <div>
        <strong>Certified victims of human trafficking</strong>
        <p className="text-sm text-gray-600">
          (Eligibility starts from the date of certification by the U.S. Office of Trafficking in Persons; eligible for up to five years.)
        </p>
        <p className="text-sm text-gray-600">
          <strong>Eligibility Date:</strong> Date of certification, Month/Day/Year
        </p>
      </div>
    </label>

    {/* Iraqi and Afghan Special Immigrants */}
    <label className="flex items-start">
      <input
        type="checkbox"
        name="immigrationStatus"
        value="Iraqi and Afghan Special Immigrants"
        checked={formData.immigrationStatus === "Iraqi and Afghan Special Immigrants"}
        onChange={handleChange}
        className="mr-2 mt-1"
      />
      <div>
        <strong>Iraqi and Afghan Special Immigrants</strong>
        <p className="text-sm text-gray-600">
          (Eligibility starts from the date of entry into the United States; eligible for up to five years.)
        </p>
        <p className="text-sm text-gray-600">
          <strong>Eligibility Date:</strong> Date of arrival to the U.S., Month/Day/Year
        </p>
      </div>
    </label>

    {/* Afghan Humanitarian Parolees */}
    <label className="flex items-start">
      <input
        type="checkbox"
        name="immigrationStatus"
        value="Afghan Humanitarian Parolees"
        checked={formData.immigrationStatus === "Afghan Humanitarian Parolees"}
        onChange={handleChange}
        className="mr-2 mt-1"
      />
      <div>
        <strong>Afghan Humanitarian Parolees</strong>
        <p className="text-sm text-gray-600">
          (Eligibility begins the date paroled into the United States, between July 31, 2021 and September 30, 2023; eligible until end of the parolee term.)
        </p>
        <p className="text-sm text-gray-600">
          <strong>Eligibility Date:</strong> Date of arrival on I-94, Month/Day/Year
        </p>
      </div>
    </label>

    {/* Afghans with Special Immigrant Parole (SI/SQ Parole) or Special Immigrant Conditional Permanent Residents (SI CPR) */}
    <label className="flex items-start">
      <input
        type="checkbox"
        name="immigrationStatus"
        value="Afghans with Special Immigrant Parole (SI/SQ Parole) or Special Immigrant Conditional Permanent Residents (SI CPR)"
        checked={formData.immigrationStatus === "Afghans with Special Immigrant Parole (SI/SQ Parole) or Special Immigrant Conditional Permanent Residents (SI CPR)"}
        onChange={handleChange}
        className="mr-2 mt-1"
      />
      <div>
        <strong>Afghans with Special Immigrant Parole (SI/SQ Parole) or Special Immigrant Conditional Permanent Residents (SI CPR)</strong>
        <p className="text-sm text-gray-600">
          (Eligibility starts the date of entry into the United States; eligible for up to five years.)
        </p>
        <p className="text-sm text-gray-600">
          <strong>Eligibility Date:</strong> Date of arrival to the U.S., Month/Day/Year
        </p>
      </div>
    </label>

    {/* Ukrainian Humanitarian Parolees */}
    <label className="flex items-start">
      <input
        type="checkbox"
        name="immigrationStatus"
        value="Ukrainian Humanitarian Parolees"
        checked={formData.immigrationStatus === "Ukrainian Humanitarian Parolees"}
        onChange={handleChange}
        className="mr-2 mt-1"
      />
      <div>
        <strong>Ukrainian Humanitarian Parolees</strong>
        <p className="text-sm text-gray-600">
          (Paroled into the United States between February 24, 2022 and September 30, 2023. Eligibility begins May 21, 2022 or the date of entry, whichever is later; eligibility ends the date of their parolee term.)
        </p>
        <p className="text-sm text-gray-600">
          <strong>Eligibility Date:</strong> Date of arrival on I-94, Month/Day/Year
        </p>
      </div>
    </label>
  </div>

  {/* Eligibility Date Input */}
  <div>
    <label className="block text-sm font-medium text-gray-700">
      Eligibility Date
    </label>
    <input
      type="date"
      name="eligibilityDate"
      value={formData.eligibilityDate}
      onChange={handleChange}
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
    />
  </div>
</div>
{/* Program Eligibility Determination */}
<div className="space-y-4">
  <h2 className="text-xl font-bold">Program Eligibility Determination</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Question 1 */}
    <div>
      <label className="block text-sm font-medium text-gray-700">
        1. Is the participant receiving services from resettlement agencies, such as Reception and Placement, Matching Grant, and/or Preferred Community Programs?
      </label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="programEligibility.receivingServices"
            checked={formData.programEligibility.receivingServices}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="programEligibility.receivingServices"
            checked={!formData.programEligibility.receivingServices}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                programEligibility: {
                  ...prev.programEligibility,
                  receivingServices: !e.target.checked,
                },
              }));
            }}
            className="mr-2"
          />
          No
        </label>
      </div>
      <p className="text-sm text-gray-600 italic mt-1">
        (Participant statement to answer this question serves as a verification.)
      </p>
    </div>

    {/* Question 2 */}
    <div>
      <label className="block text-sm font-medium text-gray-700">
        2. Is the participant 16 years of age or older?
      </label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="programEligibility.ageOver16"
            checked={formData.programEligibility.ageOver16}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="programEligibility.ageOver16"
            checked={!formData.programEligibility.ageOver16}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                programEligibility: {
                  ...prev.programEligibility,
                  ageOver16: !e.target.checked,
                },
              }));
            }}
            className="mr-2"
          />
          No
        </label>
      </div>
    </div>

    {/* Question 3 */}
    <div>
      <label className="block text-sm font-medium text-gray-700">
        3. Does the participant live in Washington?
      </label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="programEligibility.livesInWashington"
            checked={formData.programEligibility.livesInWashington}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="programEligibility.livesInWashington"
            checked={!formData.programEligibility.livesInWashington}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                programEligibility: {
                  ...prev.programEligibility,
                  livesInWashington: !e.target.checked,
                },
              }));
            }}
            className="mr-2"
          />
          No
        </label>
      </div>
    </div>

    {/* Question 4 */}
    <div>
      <label className="block text-sm font-medium text-gray-700">
        4. Did the participant arrive in the United States on or after July 1, 2021?
      </label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="programEligibility.arrivedAfterJuly2021"
            checked={formData.programEligibility.arrivedAfterJuly2021}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="programEligibility.arrivedAfterJuly2021"
            checked={!formData.programEligibility.arrivedAfterJuly2021}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                programEligibility: {
                  ...prev.programEligibility,
                  arrivedAfterJuly2021: !e.target.checked,
                },
              }));
            }}
            className="mr-2"
          />
          No
        </label>
      </div>
    </div>

    {/* Question 5 */}
    <div>
      <label className="block text-sm font-medium text-gray-700">
        5. Does the participant have an approved immigration status?
      </label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="programEligibility.approvedImmigrationStatus"
            checked={formData.programEligibility.approvedImmigrationStatus}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="programEligibility.approvedImmigrationStatus"
            checked={!formData.programEligibility.approvedImmigrationStatus}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                programEligibility: {
                  ...prev.programEligibility,
                  approvedImmigrationStatus: !e.target.checked,
                },
              }));
            }}
            className="mr-2"
          />
          No
        </label>
      </div>
    </div>

    {/* Eligibility Note */}
    <div className="col-span-full">
      <p className="text-sm text-gray-600 italic">
        (If the answer to question number one is No and yes for the rest of the questions, the client is eligible for services.)
      </p>
    </div>

    {/* Question 6 */}
    <div>
      <label className="block text-sm font-medium text-gray-700">
        6. Is the participant eligible for services under the Community Outreach and Education Program?
      </label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="programEligibility.eligibleForServices"
            checked={formData.programEligibility.eligibleForServices}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="programEligibility.eligibleForServices"
            checked={!formData.programEligibility.eligibleForServices}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                programEligibility: {
                  ...prev.programEligibility,
                  eligibleForServices: !e.target.checked,
                },
              }));
            }}
            className="mr-2"
          />
          No
        </label>
      </div>
    </div>

    {/* Question 7 */}
    <div>
      <label className="block text-sm font-medium text-gray-700">
        7. Is a copy of the immigration status collected and kept in the participant record?
      </label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="programEligibility.immigrationStatusCopy"
            checked={formData.programEligibility.immigrationStatusCopy}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="programEligibility.immigrationStatusCopy"
            checked={!formData.programEligibility.immigrationStatusCopy}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                programEligibility: {
                  ...prev.programEligibility,
                  immigrationStatusCopy: !e.target.checked,
                },
              }));
            }}
            className="mr-2"
          />
          No
        </label>
      </div>
      <p className="text-sm text-gray-600 italic mt-1">
        (Please keep a copy of the immigration documentation in the participant record.)
      </p>
    </div>

    {/* Question 8 */}
    <div>
      <label className="block text-sm font-medium text-gray-700">
        8. Completed Consent Form:
      </label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="programEligibility.consentFormCompleted"
            checked={formData.programEligibility.consentFormCompleted}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="programEligibility.consentFormCompleted"
            checked={!formData.programEligibility.consentFormCompleted}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                programEligibility: {
                  ...prev.programEligibility,
                  consentFormCompleted: !e.target.checked,
                },
              }));
            }}
            className="mr-2"
          />
          No
        </label>
      </div>
    </div>

    {/* Question 9 */}
    <div>
      <label className="block text-sm font-medium text-gray-700">
        9. Completed Release of Information Form:
      </label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="programEligibility.releaseFormCompleted"
            checked={formData.programEligibility.releaseFormCompleted}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="programEligibility.releaseFormCompleted"
            checked={!formData.programEligibility.releaseFormCompleted}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                programEligibility: {
                  ...prev.programEligibility,
                  releaseFormCompleted: !e.target.checked,
                },
              }));
            }}
            className="mr-2"
          />
          No
        </label>
      </div>
    </div>
  </div>
</div>

{/* Household Information */}
<div className="space-y-4">
  <h2 className="text-xl font-bold">Household Information</h2>

  {/* Head of Household */}
  <div>
    <label className="block text-sm font-medium text-gray-700">
      Head of Household:
    </label>
    <div className="flex items-center mt-2">
      <label className="flex items-center mr-4">
        <input
          type="checkbox"
          name="headOfHousehold"
          checked={formData.participant.isHeadOfHousehold}
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              participant: {
                ...prev.participant,
                isHeadOfHousehold: e.target.checked,
              },
            }));
          }}
          className="mr-2"
        />
        Yes
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          name="headOfHousehold"
          checked={!formData.participant.isHeadOfHousehold}
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              participant: {
                ...prev.participant,
                isHeadOfHousehold: !e.target.checked,
              },
            }));
          }}
          className="mr-2"
        />
        No
      </label>
    </div>
  </div>

  {/* Relationship to Head of Household */}
  <div>
    <label className="block text-sm font-medium text-gray-700">
      Relationship to Head of Household:
    </label>
    <input
      type="text"
      name="relationshipToHead"
      value={formData.participant.relationshipToHead}
      onChange={(e) => {
        setFormData((prev) => ({
          ...prev,
          participant: {
            ...prev.participant,
            relationshipToHead: e.target.value,
          },
        }));
      }}
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      placeholder="Examples: spouse, child, parent, etc."
    />
  </div>

  {/* Household Members Table */}
  <div>
    <p className="text-sm text-gray-600 mb-4">
      Please list household member's names and related information in the table below:
      <br />
      (Definition of household: participant, spouse, and children under age of 18)
    </p>
    {formData.householdMembers.map((member, index) => (
      <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name (First, Middle, Last)
          </label>
          <input
            type="text"
            name="name"
            value={member.name}
            onChange={(e) => handleHouseholdMemberChange(index, e)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date of Birth (Month/Day/Year)
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={member.dateOfBirth}
            onChange={(e) => handleHouseholdMemberChange(index, e)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Relationship to Head of Household
          </label>
          <input
            type="text"
            name="relationship"
            value={member.relationship}
            onChange={(e) => handleHouseholdMemberChange(index, e)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Current Immigration Status
          </label>
          <input
            type="text"
            name="immigrationStatus"
            value={member.immigrationStatus}
            onChange={(e) => handleHouseholdMemberChange(index, e)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-full">
          <label className="block text-sm font-medium text-gray-700">
            Intake, Eligibility, and Needs
          </label>
          <div className="mt-2 space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="intakeEligibilityNeeds"
                value="Intake, eligibility, and needs will determine separately"
                checked={member.intakeEligibilityNeeds.includes(
                  "Intake, eligibility, and needs will determine separately"
                )}
                onChange={(e) => {
                  const updatedHouseholdMembers = [...formData.householdMembers];
                  const needs = updatedHouseholdMembers[index].intakeEligibilityNeeds.split(", ");
                  if (e.target.checked) {
                    needs.push(e.target.value);
                  } else {
                    const indexToRemove = needs.indexOf(e.target.value);
                    if (indexToRemove !== -1) {
                      needs.splice(indexToRemove, 1);
                    }
                  }
                  updatedHouseholdMembers[index].intakeEligibilityNeeds = needs.join(", ");
                  setFormData((prev) => ({
                    ...prev,
                    householdMembers: updatedHouseholdMembers,
                  }));
                }}
                className="mr-2"
              />
              Intake, eligibility, and needs will determine separately
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="intakeEligibilityNeeds"
                value="Eligibility and needs will determine under HOH intake"
                checked={member.intakeEligibilityNeeds.includes(
                  "Eligibility and needs will determine under HOH intake"
                )}
                onChange={(e) => {
                  const updatedHouseholdMembers = [...formData.householdMembers];
                  const needs = updatedHouseholdMembers[index].intakeEligibilityNeeds.split(", ");
                  if (e.target.checked) {
                    needs.push(e.target.value);
                  } else {
                    const indexToRemove = needs.indexOf(e.target.value);
                    if (indexToRemove !== -1) {
                      needs.splice(indexToRemove, 1);
                    }
                  }
                  updatedHouseholdMembers[index].intakeEligibilityNeeds = needs.join(", ");
                  setFormData((prev) => ({
                    ...prev,
                    householdMembers: updatedHouseholdMembers,
                  }));
                }}
                className="mr-2"
              />
              Eligibility and needs will determine under HOH intake
            </label>
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={() => removeHouseholdMember(index)}
            className="text-red-600 hover:text-red-800"
          >
            Remove Household Member
          </button>
        </div>
      </div>
    ))}
    <button
      type="button"
      onClick={addHouseholdMember}
      className="text-indigo-600 hover:text-indigo-800"
    >
      + Add Household Member
    </button>
  </div>

<<<<<<< Updated upstream



  </div>

        {/* Service Summary */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Service Summary</h2>
          {formData.serviceSummary.map((service, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Service Provided
=======
  {/* Needed Services */}
  <div>
    <label className="block text-sm font-medium text-gray-700">
      Please list needed services:
    </label>
    {[...Array(8)].map((_, index) => (
      <input
        key={index}
        type="text"
        name={`neededService${index + 1}`}
        value={formData.servicesNeeded[index] || ""}
        onChange={(e) => {
          const updatedServicesNeeded = [...formData.servicesNeeded];
          updatedServicesNeeded[index] = e.target.value;
          setFormData((prev) => ({
            ...prev,
            servicesNeeded: updatedServicesNeeded,
          }));
        }}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        placeholder={`Service ${index + 1}`}
      />
    ))}
  </div>

  {/* Services to Be Provided */}
  <div>
    <label className="block text-sm font-medium text-gray-700">
      What services will be provided to meet the participant's needs?
    </label>
    {[...Array(8)].map((_, index) => (
      <input
        key={index}
        type="text"
        name={`providedService${index + 1}`}
        value={formData.servicesProvided[index]?.service || ""}
        onChange={(e) => {
          const updatedServicesProvided = [...formData.servicesProvided];
          updatedServicesProvided[index] = {
            ...updatedServicesProvided[index],
            service: e.target.value,
          };
          setFormData((prev) => ({
            ...prev,
            servicesProvided: updatedServicesProvided,
          }));
        }}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        placeholder={`Service ${index + 1}`}
      />
    ))}
  </div>

  {/* Categorize Services */}
  <div>
    <label className="block text-sm font-medium text-gray-700">
      Please categorize the services your organization will provide to meet the needs of the participant:
    </label>
    <div className="mt-2 space-y-2">
      <label className="flex items-center">
        <input
          type="checkbox"
          name="servicesNeeded"
          value="Outreach"
          checked={formData.servicesNeeded.includes("Outreach")}
          onChange={handleChange}
          className="mr-2"
        />
        Outreach
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          name="servicesNeeded"
          value="Community & Cultural Orientation and Educational Workshops"
          checked={formData.servicesNeeded.includes(
            "Community & Cultural Orientation and Educational Workshops"
          )}
          onChange={handleChange}
          className="mr-2"
        />
        Community & Cultural Orientation and Educational Workshops
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          name="servicesNeeded"
          value="Information and Referrals"
          checked={formData.servicesNeeded.includes("Information and Referrals")}
          onChange={handleChange}
          className="mr-2"
        />
        Information and Referrals
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          name="servicesNeeded"
          value="Resource Navigation"
          checked={formData.servicesNeeded.includes("Resource Navigation")}
          onChange={handleChange}
          className="mr-2"
        />
        Resource Navigation
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          name="servicesNeeded"
          value="Support Services"
          checked={formData.servicesNeeded.includes("Support Services")}
          onChange={handleChange}
          className="mr-2"
        />
        Support Services
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          name="servicesNeeded"
          value="Other"
          checked={formData.servicesNeeded.includes("Other")}
          onChange={handleChange}
          className="mr-2"
        />
        Other, please describe:
        <input
          type="text"
          name="otherServiceDescription"
          value={formData.otherServiceDescription || ""}
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              otherServiceDescription: e.target.value,
            }));
          }}
          className="ml-2 p-1 border border-gray-300 rounded-md"
          placeholder="Describe other service"
        />
      </label>
    </div>
  </div>
</div>

        {/* Service Summary */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Service Summary</h2>
          {formData.servicesProvided.map((service, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Service Provided or will be provided
>>>>>>> Stashed changes
                </label>
                <input
                  type="text"
                  name="service"
                  value={service.service}
<<<<<<< Updated upstream
                  onChange={(e) => handleServiceSummaryChange(index, e)}
=======
                  onChange={(e) => handleServiceProvidedChange(index, e)}
>>>>>>> Stashed changes
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
<<<<<<< Updated upstream
                  Date of Service
=======
                  Date of Services
>>>>>>> Stashed changes
                </label>
                <input
                  type="date"
                  name="date"
                  value={service.date}
<<<<<<< Updated upstream
                  onChange={(e) => handleServiceSummaryChange(index, e)}
=======
                  onChange={(e) => handleServiceProvidedChange(index, e)}
>>>>>>> Stashed changes
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Next Step/Follow Up
                </label>
                <input
                  type="text"
                  name="nextStep"
                  value={service.nextStep}
<<<<<<< Updated upstream
                  onChange={(e) => handleServiceSummaryChange(index, e)}
=======
                  onChange={(e) => handleServiceProvidedChange(index, e)}
>>>>>>> Stashed changes
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
<<<<<<< Updated upstream
                  Additional Notes/Comments
=======
                  Additional Notes/Comments/explanation about services
>>>>>>> Stashed changes
                </label>
                <input
                  type="text"
                  name="notes"
                  value={service.notes}
<<<<<<< Updated upstream
                  onChange={(e) => handleServiceSummaryChange(index, e)}
=======
                  onChange={(e) => handleServiceProvidedChange(index, e)}
>>>>>>> Stashed changes
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <button
                  type="button"
<<<<<<< Updated upstream
                  onClick={() => removeServiceSummary(index)}
=======
                  onClick={() => removeServiceProvided(index)}
>>>>>>> Stashed changes
                  className="text-red-600 hover:text-red-800"
                >
                  Remove Service
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
<<<<<<< Updated upstream
            onClick={addServiceSummary}
            className="text-indigo-600 hover:text-indigo-800"
          >
            + Add Service Summary
=======
            onClick={addServiceProvided}
            className="text-indigo-600 hover:text-indigo-800"
          >
            + Add Service
>>>>>>> Stashed changes
          </button>
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

export default CommunityOutreachAndEducation;