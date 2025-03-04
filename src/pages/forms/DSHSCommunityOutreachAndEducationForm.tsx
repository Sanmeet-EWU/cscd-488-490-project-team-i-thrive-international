import React, { useState } from "react";

const DSHSCommunityOutreachAndEducationForm = () => {
  const [formData, setFormData] = useState({
    navigatorName: "",
    intakeDate: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    countryOfOrigin: "",
    phoneNumber: "",
    email: "",
    address: "",
    dshsClientNumber: "",
    alienNumber: "",
    immigrationStatus: {
      refugee: false,
      asylum: false,
      cubanHaitianEntrants: false,
      amerasians: false,
      humanTraffickingVictims: false,
      iraqiAfghanSpecialImmigrants: false,
      afghanHumanitarianParolees: false,
      afghansWithSISQParole: false,
      ukrainianHumanitarianParolees: false,
    },
    eligibilityDate: "",
    receivingResettlementServices: "",
    isSixteenOrOlder: "",
    livesInWashington: "",
    arrivedAfterJuly2021: "",
    hasApprovedImmigrationStatus: "",
    immigrationStatusCopyCollected: "",
    consentFormCompleted: "",
    releaseOfInformationFormCompleted: "",
    neededServices: [""],
    servicesProvided: {
      outreach: false,
      communityCulturalOrientation: false,
      informationReferrals: false,
      resourceNavigation: false,
      supportServices: false,
      other: false,
      otherDescription: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleImmigrationStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      immigrationStatus: {
        ...prev.immigrationStatus,
        [name]: checked,
      },
    }));
  };

  const handleServicesProvidedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      servicesProvided: {
        ...prev.servicesProvided,
        [name]: checked,
      },
    }));
  };

  const handleNeededServicesChange = (index: number, value: string) => {
    const updatedNeededServices = [...formData.neededServices];
    updatedNeededServices[index] = value;
    setFormData((prev) => ({
      ...prev,
      neededServices: updatedNeededServices,
    }));
  };

  const addNeededService = () => {
    setFormData((prev) => ({
      ...prev,
      neededServices: [...prev.neededServices, ""],
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Community Outreach and Education
      </h1>
      <h2 className="text-xl font-bold text-center mb-4">
        Organization Name: Thrive International
      </h2>
      <h2 className="text-xl font-bold text-center mb-4">
        Intake/Registration Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Navigator Name and Intake Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {/* Primary Participant Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Primary Participant Information</h2>
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
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
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
                name="email"
                value={formData.email}
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
            <div>
              <label className="block text-sm font-medium text-gray-700">
                DSHS Client #
              </label>
              <input
                type="text"
                name="dshsClientNumber"
                value={formData.dshsClientNumber}
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
                name="alienNumber"
                value={formData.alienNumber}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Current Immigration Status */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Current Immigration Status</h2>
          <div className="space-y-2">
            {Object.entries(formData.immigrationStatus).map(([key, value]) => (
              <label key={key} className="flex items-center">
                <input
                  type="checkbox"
                  name={key}
                  checked={Boolean(value)}
                  onChange={handleImmigrationStatusChange}
                  className="mr-2"
                />
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </label>
            ))}
          </div>
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
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              1. Is participant receiving services from resettlement agencies, such as
              Reception and Placement, Matching Grant, and/or Preferred Community Programs?
            </label>
            <div className="flex items-center">
              <label className="flex items-center mr-4">
                <input
                  type="checkbox"
                  name="receivingResettlementServices"
                  checked={formData.receivingResettlementServices === "Yes"}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      receivingResettlementServices: "Yes",
                    }))
                  }
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="receivingResettlementServices"
                  checked={formData.receivingResettlementServices === "No"}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      receivingResettlementServices: "No",
                    }))
                  }
                  className="mr-2"
                />
                No
              </label>
            </div>
            <p className="text-sm italic text-gray-600">
              Participant statement to answer this question serves as a verification.
            </p>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              2. Is the participant 16 years of age or older?
            </label>
            <div className="flex items-center">
              <label className="flex items-center mr-4">
                <input
                  type="checkbox"
                  name="isSixteenOrOlder"
                  checked={formData.isSixteenOrOlder === "Yes"}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      isSixteenOrOlder: "Yes",
                    }))
                  }
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="isSixteenOrOlder"
                  checked={formData.isSixteenOrOlder === "No"}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      isSixteenOrOlder: "No",
                    }))
                  }
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              3. Does the participant live in Washington?
            </label>
            <div className="flex items-center">
              <label className="flex items-center mr-4">
                <input
                  type="checkbox"
                  name="livesInWashington"
                  checked={formData.livesInWashington === "Yes"}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      livesInWashington: "Yes",
                    }))
                  }
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="livesInWashington"
                  checked={formData.livesInWashington === "No"}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      livesInWashington: "No",
                    }))
                  }
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              4. Did the participant arrive in the United States on or after July 1, 2021?
            </label>
            <div className="flex items-center">
              <label className="flex items-center mr-4">
                <input
                  type="checkbox"
                  name="arrivedAfterJuly2021"
                  checked={formData.arrivedAfterJuly2021 === "Yes"}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      arrivedAfterJuly2021: "Yes",
                    }))
                  }
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="arrivedAfterJuly2021"
                  checked={formData.arrivedAfterJuly2021 === "No"}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      arrivedAfterJuly2021: "No",
                    }))
                  }
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              5. Does the participant have an approved immigration status?
            </label>
            <div className="flex items-center">
              <label className="flex items-center mr-4">
                <input
                  type="checkbox"
                  name="hasApprovedImmigrationStatus"
                  checked={formData.hasApprovedImmigrationStatus === "Yes"}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      hasApprovedImmigrationStatus: "Yes",
                    }))
                  }
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="hasApprovedImmigrationStatus"
                  checked={formData.hasApprovedImmigrationStatus === "No"}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      hasApprovedImmigrationStatus: "No",
                    }))
                  }
                  className="mr-2"
                />
                No
              </label>
            </div>
            <p className="text-sm italic text-gray-600">
              If the answer to question number one is No and yes for rest of questions,
              the client is eligible for services.
            </p>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Is a copy of the immigration status collected and kept in the participant
              record?
            </label>
            <div className="flex items-center">
              <label className="flex items-center mr-4">
                <input
                  type="checkbox"
                  name="immigrationStatusCopyCollected"
                  checked={formData.immigrationStatusCopyCollected === "Yes"}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      immigrationStatusCopyCollected: "Yes",
                    }))
                  }
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="immigrationStatusCopyCollected"
                  checked={formData.immigrationStatusCopyCollected === "No"}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      immigrationStatusCopyCollected: "No",
                    }))
                  }
                  className="mr-2"
                />
                No
              </label>
            </div>
            <p className="text-sm italic text-gray-600">
              Please keep a copy of the immigration documentation in the participant
              record.
            </p>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Completed Consent Form
            </label>
            <div className="flex items-center">
              <label className="flex items-center mr-4">
                <input
                  type="checkbox"
                  name="consentFormCompleted"
                  checked={formData.consentFormCompleted === "Yes"}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      consentFormCompleted: "Yes",
                    }))
                  }
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="consentFormCompleted"
                  checked={formData.consentFormCompleted === "No"}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      consentFormCompleted: "No",
                    }))
                  }
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Completed Release of Information Form
            </label>
            <div className="flex items-center">
              <label className="flex items-center mr-4">
                <input
                  type="checkbox"
                  name="releaseOfInformationFormCompleted"
                  checked={formData.releaseOfInformationFormCompleted === "Yes"}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      releaseOfInformationFormCompleted: "Yes",
                    }))
                  }
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="releaseOfInformationFormCompleted"
                  checked={formData.releaseOfInformationFormCompleted === "No"}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      releaseOfInformationFormCompleted: "No",
                    }))
                  }
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
        </div>

        {/* Needed Services */}
        <div className="space-y-4">
          <h2 className="text-l font-bold">Please list needed services:</h2>
          {formData.neededServices.map((service, index) => (
            <div key={index} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Service {index + 1}
              </label>
              <textarea
                value={service}
                onChange={(e) => handleNeededServicesChange(index, e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                rows={3}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addNeededService}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Add Another Service
          </button>
        </div>

        {/* Services Provided */}
        <div className="space-y-4">
          <h2 className="text-l font-bold">What services will be provided to meet participant's need?</h2>
          <div className="space-y-2">
            {Object.entries(formData.servicesProvided).map(([key, value]) => {
              if (key === "otherDescription") return null;
              return (
                <label key={key} className="flex items-center">
                  <input
                    type="checkbox"
                    name={key}
                    checked={Boolean(value)}
                    onChange={handleServicesProvidedChange}
                    className="mr-2"
                  />
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </label>
              );
            })}
          </div>
          {formData.servicesProvided.other && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Please describe:
              </label>
              <textarea
                name="otherDescription"
                value={formData.servicesProvided.otherDescription}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    servicesProvided: {
                      ...prev.servicesProvided,
                      otherDescription: e.target.value,
                    },
                  }))
                }
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                rows={3}
              />
            </div>
          )}
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

export default DSHSCommunityOutreachAndEducationForm;