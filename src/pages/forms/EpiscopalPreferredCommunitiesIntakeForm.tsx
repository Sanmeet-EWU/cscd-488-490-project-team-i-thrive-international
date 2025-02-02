<<<<<<< Updated upstream
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
=======


import React, { useState, ChangeEvent, FormEvent } from 'react';

interface ClientData {

  interpretationProvided: boolean;
  interpretationLanguage: string;
  interpretationInPerson: boolean;
  interpretationPhone: boolean;
  interpretationInPersonStaff: boolean;
  interpretationInPersonFamily: boolean;
  interpretationInPersonContract: boolean;
  interpreterId: string;
  noInterpretationNeeded: boolean;
  clientSignature: string;
  clientSignatureDate: string;
  guardianName: string;
  guardianSignature: string;
  guardianSignatureDate: string;
  staffName: string;
  staffSignature: string;
  staffSignatureDate: string;
  interpreterName: string;
  interpreterSignature: string;
  interpreterSignatureDate: string;
  temporaryHousing: boolean | null;
  temporaryHousingDate: string;
  temporaryHousingType: string[];
  longTermHousing: boolean | null;
  longTermHousingDate: string;
  additionalNotes: string;
  clientName: string;
  alienNumber: string;
  dob: string;
  categoryOfORREligibility: string;
  dateOfEligibility: string;
  gender: string;
  nationality: string;
  ethnicity: string;
  languages: string;
  phoneNumber: string;
  address: string;
  emailAddress: string;
  assessmentDate: string;
  gapsEnrollment: boolean;
  gapsEnrollmentDate: string;
  icmEnrollment: boolean;
  icmEnrollmentDate: string;
  reEnrollment: boolean;
  reEnrollmentDate: string;
  fromRemoteUnderservedArea: boolean;
  primaryVulnerability: string;
  secondaryVulnerability: string;
  primaryRiskDomain: string;
  eadStatus: boolean | null;
  eadStatusDate: string;
  eadReceipt: boolean | null;
  eadReceiptDate: string;
  schoolEnrollment: boolean | null;
  schoolEnrollmentDate: string;
  socialSecurityCardReceived: boolean;
  socialSecurityCardReceivedDate: string;
  socialSecurityApplicationSubmitted: boolean | null;
  socialSecurityApplicationSubmittedDate: string;
  domesticMedicalScreeningCompleted: boolean | null;
  domesticMedicalScreeningCompletedDate: string;
  tbiMedicalScreeningCompleted: boolean | null;
  tbiMedicalScreeningCompletedDate: string;
  healthInsuranceApplicationSubmitted: boolean | null;
  healthInsuranceApplicationSubmittedDate: string;
  healthInsuranceEnrollment: boolean | null;
  healthInsuranceEnrollmentDate: string;
  snapApplicationSubmitted: boolean | null;
  snapApplicationSubmittedDate: string;
  snapApproval: boolean | null;
  snapApprovalDate: string;
  minorDependents: string[];
  initialAssessment: InitialAssessment[];



  signatureTable: {
    client: { printName: string; signature: string; date: string };
    guardian: { printName: string; signature: string; date: string };
    interpreter: { printName: string; signature: string; date: string };
    caseManager: { printName: string; signature: string; date: string };
  };

  clientAgreement: {
    firstName: string;
    lastName: string;
    eligibilityDate: string;
    alienNumber: string;
    nationality: string;
    dateEnrolled: string;
  };

  authorizationToReleaseInfo: {
    clientInfo: {
      clientName: string;
      dateOfBirth: string;
      caseNumber: string;
      alienNumber: string;
      arrivalDate: string;
    };
    minorDependents: string[];
    informationAndRecords: string;
    selectedInformation: string[];
    serviceProviders: string[];
    additionalSpecialInstructions: string;
    [key: string]: any;
  };
}

interface InitialAssessment {
  riskDomain: string;
  atRisk: boolean;
  stable: boolean;
  thriving: boolean;
  notes: string;
}






const EpiscopalPreferredCommunitiesIntakeForm: React.FC = () => {
const [formData, setFormData] = useState<ClientData>({



  interpretationProvided: false,
  interpretationLanguage: "",
  interpretationInPerson: false,
  interpretationPhone: false,
  interpretationInPersonStaff: false,
  interpretationInPersonFamily: false,
  interpretationInPersonContract: false,
  interpreterId: "",
  noInterpretationNeeded: false,
  clientSignature: "",
  clientSignatureDate: "",
  guardianName: "",
  guardianSignature: "",
  guardianSignatureDate: "",
  staffName: "",
  staffSignature: "",
  staffSignatureDate: "",
  interpreterName: "",
  interpreterSignature: "",
  interpreterSignatureDate: "",

  clientAgreement: {
    firstName: "",
    lastName: "",
    eligibilityDate: "",
    alienNumber: "",
    nationality: "",
    dateEnrolled: "",
  },
  



  signatureTable: {
    client: { printName: "", signature: "", date: "" },
    guardian: { printName: "", signature: "", date: "" },
    interpreter: { printName: "", signature: "", date: "" },
    caseManager: { printName: "", signature: "", date: "" },
  },

  authorizationToReleaseInfo: {
    clientInfo: {
      clientName: '',
      dateOfBirth: '',
      caseNumber: '',
      alienNumber: '',
      arrivalDate: '',
    },
    minorDependents: [],
    informationAndRecords: '',
    selectedInformation: [],
    serviceProviders: [],
    additionalSpecialInstructions: '',
  },


  temporaryHousing: null,
  temporaryHousingDate: '',
  temporaryHousingType: [],
  longTermHousing: null,
  longTermHousingDate: '',
  additionalNotes: '',
  clientName: '',
  alienNumber: '',
  dob: '',
  categoryOfORREligibility: '',
  dateOfEligibility: '',
  gender: '',
  nationality: '',
  ethnicity: '',
  languages: '',
  phoneNumber: '',
  address: '',
  emailAddress: '',
  assessmentDate: '',
  gapsEnrollment: false,
  gapsEnrollmentDate: '',
  icmEnrollment: false,
  icmEnrollmentDate: '',
  reEnrollment: false,
  reEnrollmentDate: '',
  fromRemoteUnderservedArea: false,
  primaryVulnerability: '',
  secondaryVulnerability: '',
  primaryRiskDomain: '',
  eadStatus: false,
  eadStatusDate: '',
  eadReceipt: false,
  eadReceiptDate: '',
  schoolEnrollment: false,
  schoolEnrollmentDate: '',
  socialSecurityCardReceived: false,
  socialSecurityCardReceivedDate: '',
  socialSecurityApplicationSubmitted: false,
  socialSecurityApplicationSubmittedDate: '',
  domesticMedicalScreeningCompleted: false,
  domesticMedicalScreeningCompletedDate: '',
  tbiMedicalScreeningCompleted: false,
  tbiMedicalScreeningCompletedDate: '',
  healthInsuranceApplicationSubmitted: false,
  healthInsuranceApplicationSubmittedDate: '',
  healthInsuranceEnrollment: false,
  healthInsuranceEnrollmentDate: '',
  snapApplicationSubmitted: false,
  snapApplicationSubmittedDate: '',
  snapApproval: false,
  snapApprovalDate: '',
  minorDependents: [],
  initialAssessment: [
    { riskDomain: 'Initial Housing Status', atRisk: false, stable: false, thriving: false, notes: '' },
    { riskDomain: 'Initial Food Security', atRisk: false, stable: false, thriving: false, notes: '' },
    { riskDomain: 'Initial Income', atRisk: false, stable: false, thriving: false, notes: '' },
    { riskDomain: 'Initial Financial Management', atRisk: false, stable: false, thriving: false, notes: '' },
    { riskDomain: 'Initial Mental Health', atRisk: false, stable: false, thriving: false, notes: '' },
    { riskDomain: 'Initial Access to Healthcare System', atRisk: false, stable: false, thriving: false, notes: '' },
    { riskDomain: 'Initial Transportation', atRisk: false, stable: false, thriving: false, notes: '' },
    { riskDomain: 'Initial Access to Benefits System', atRisk: false, stable: false, thriving: false, notes: '' },
    { riskDomain: 'Initial English Language Education', atRisk: false, stable: false, thriving: false, notes: '' },
    { riskDomain: 'Initial Family Wellness', atRisk: false, stable: false, thriving: false, notes: '' },
    { riskDomain: 'Initial Social Integration', atRisk: false, stable: false, thriving: false, notes: '' },
    { riskDomain: 'Initial Immigration Legal Assistance', atRisk: false, stable: false, thriving: false, notes: '' },
  ],
});




const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  const { name, value, type, checked } = e.target as HTMLInputElement;

  if (name.startsWith("authorizationToReleaseInfo.")) {
    // Handling nested authorizationToReleaseInfo fields
    const parts = name.split(".");
    const field = parts[parts.length - 1];
    const nestedPath = parts.slice(1, -1);

    setFormData((prev) => {
      let updatedNested = { ...prev.authorizationToReleaseInfo };
      let ref = updatedNested;

      for (let i = 0; i < nestedPath.length; i++) {
        ref[nestedPath[i]] = ref[nestedPath[i]] || {};
        if (i === nestedPath.length - 1) {
          ref[nestedPath[i]][field] = type === "checkbox" ? checked : value;
        }
        ref = ref[nestedPath[i]];
      }

      return {
        ...prev,
        authorizationToReleaseInfo: updatedNested,
      };
    });
  } else if (name.startsWith("initialAssessment.")) {
    // Handling initial assessment checkbox and text changes
    const parts = name.split(".");
    const index = parseInt(parts[1], 10);
    const field = parts[2];

    setFormData((prev) => ({
      ...prev,
      initialAssessment: prev.initialAssessment.map((item, i) =>
        i === index ? { ...item, [field]: type === "checkbox" ? checked : value } : item
      ),
    }));
  } else if (name.startsWith("signatureTable.")) {
    // Handling signature table inputs
    const [, role, field] = name.split(".") as [string, keyof typeof formData.signatureTable, string];
    setFormData((prev) => ({
      ...prev,
      signatureTable: {
        ...prev.signatureTable,
        [role]: {
          ...prev.signatureTable[role],
          [field]: value,
        },
      },
    }));
  } else if (type === "checkbox") {
    // Handling boolean checkbox fields
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  } else {
    // Handling all other input fields
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};







  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Episcopal Preferred Communities Program Intake Form
      </h1>

      {/* Add the quote here */}
      <div className="text-center text-gray-700 mb-6">
        <p>
          This form serves as a guide for collecting required information for clients enrolled in PC services (Traditional ICM and GAPS).
          All information collected using this form must be entered into the database "GAPS Intake" tab within 7 days of completion, but
          no later than the 8th of the following month.
        </p>
      </div>




      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Demographic / Contact Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Demographic / Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Client Name</label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Alien Number</label>
              <input
                type="text"
                name="alienNumber"
                value={formData.alienNumber}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Category of ORR Eligibility</label>
              <input
                type="text"
                name="categoryOfORREligibility"
                value={formData.categoryOfORREligibility}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Eligibility</label>
              <input
                type="date"
                name="dateOfEligibility"
                value={formData.dateOfEligibility}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
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
              <label className="block text-sm font-medium text-gray-700">Nationality</label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Ethnicity</label>
              <input
                type="text"
                name="ethnicity"
                value={formData.ethnicity}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Language(s)</label>
              <input
                type="text"
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
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
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
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
              <label className="block text-sm font-medium text-gray-700">Assessment Date (The assessment and status date entered into the database should
                both be the date the assessment was conducted with the client) </label>
              <input
                type="date"
                name="assessmentDate"
                value={formData.assessmentDate}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
>>>>>>> Stashed changes
            </div>
          </div>
        </div>

<<<<<<< Updated upstream
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
=======
{/* Intake Information */}
<div className="space-y-4">
  <h2 className="text-xl font-bold">INTAKE INFORMATION</h2>

  {/* GAPS Enrollment */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">GAPS Enrollment</label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="gapsEnrollment"
            checked={formData.gapsEnrollment}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="gapsEnrollment"
            checked={!formData.gapsEnrollment}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                gapsEnrollment: !e.target.checked,
              }));
            }}
            className="mr-2"
          />
          No
        </label>
      </div>
      <input
        type="date"
        name="gapsEnrollmentDate"
        value={formData.gapsEnrollmentDate}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </div>

  {/* ICM Enrollment */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">ICM Enrollment</label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="icmEnrollment"
            checked={formData.icmEnrollment}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="icmEnrollment"
            checked={!formData.icmEnrollment}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                icmEnrollment: !e.target.checked,
              }));
            }}
            className="mr-2"
          />
          No
        </label>
      </div>
      <input
        type="date"
        name="icmEnrollmentDate"
        value={formData.icmEnrollmentDate}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Re-enrollment</label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="reEnrollment"
            checked={formData.reEnrollment}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="reEnrollment"
            checked={!formData.reEnrollment}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                reEnrollment: !e.target.checked,
              }));
            }}
            className="mr-2"
          />
          No
        </label>
      </div>
      <input
        type="date"
        name="reEnrollmentDate"
        value={formData.reEnrollmentDate}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </div>

  {/* From Remote Underserved Area */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">From Remote Underserved Area</label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="fromRemoteUnderservedArea"
            checked={formData.fromRemoteUnderservedArea}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="fromRemoteUnderservedArea"
            checked={!formData.fromRemoteUnderservedArea}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                fromRemoteUnderservedArea: !e.target.checked,
              }));
            }}
            className="mr-2"
          />
          No
        </label>
      </div>
    </div>
  </div>

  {/* Primary Vulnerability */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">Primary Vulnerability</label>
      <input
        type="text"
        name="primaryVulnerability"
        value={formData.primaryVulnerability}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        placeholder="Enter primary vulnerability"
      />
    </div>
  </div>

  {/* Secondary Vulnerability */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">Secondary Vulnerability</label>
      <input
        type="text"
        name="secondaryVulnerability"
        value={formData.secondaryVulnerability}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        placeholder="Enter secondary vulnerability"
      />
    </div>
  </div>

  {/* Vulnerability Categories */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">Vulnerability Categories</label>
      <p className="text-sm text-gray-600">
        Minors (under 18), Young adults without support from family or networks, Single-parent households, Medical Need, Caregivers in need of additional services, Elderly refugees, LGBTQ+ refugees, Refugees with special or unique needs who have out migrated or are in underserved locations including: Secondary migrants, Refugees experiencing social adjustment issues and isolation, Refugees with psychological conditions, Victims of torture and violence (mental and physical) including: DV and GBV, Other, COVID-19, or GAPS.
      </p>
    </div>
  </div>

  {/* Primary Risk Domain */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">Primary Risk Domain</label>
      <input
        type="text"
        name="primaryRiskDomain"
        value={formData.primaryRiskDomain}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        placeholder="Enter primary risk domain"
      />
    </div>
  </div>

  {/* Risk Domains */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">Risk Domains</label>
      <p className="text-sm text-gray-600">
        Housing, Basic Needs, Navigation of Physical Healthcare Systems, Mental Health, Financial Management, Childcare, Transportation, Family Wellness, Social Adjustment & Interaction/Integration, Finances (Income & Employment), Immigration Status, English Language (ELE/ASL), Linkages to Benefits Systems (SSI, SNAP, WIC, etc.)
      </p>
    </div>
  </div>

  {/* EAD Status */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">EAD Status</label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="eadStatus"
            checked={formData.eadStatus ?? false}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="eadStatus"
            checked={!formData.eadStatus}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                eadStatus: !e.target.checked,
              }));
            }}
            className="mr-2"
          />
          No
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="eadStatus"
            checked={formData.eadStatus === null}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                eadStatus: null,
              }));
            }}
            className="mr-2"
          />
          N/A
        </label>
      </div>
      <input
        type="date"
        name="eadStatusDate"
        value={formData.eadStatusDate}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </div>

  {/* EAD Receipt */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">EAD Receipt</label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="eadReceipt"
            checked={formData.eadReceipt ?? false}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="eadReceipt"
            checked={!formData.eadReceipt}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                eadReceipt: !e.target.checked,
              }));
            }}
            className="mr-2"
          />
          No
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="eadReceipt"
            checked={formData.eadReceipt === null}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                eadReceipt: null,
              }));
            }}
            className="mr-2"
          />
          N/A
        </label>
      </div>
      <input
        type="date"
        name="eadReceiptDate"
        value={formData.eadReceiptDate}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </div>

  {/* School Enrollment */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">School Enrollment (school-aged children)</label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="schoolEnrollment"
            checked={formData.schoolEnrollment ?? false}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="schoolEnrollment"
            checked={!formData.schoolEnrollment}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                schoolEnrollment: !e.target.checked,
              }));
            }}
            className="mr-2"
          />
          No
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="schoolEnrollment"
            checked={formData.schoolEnrollment === null}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                schoolEnrollment: null,
              }));
            }}
            className="mr-2"
          />
          N/A
        </label>
      </div>
      <input
        type="date"
        name="schoolEnrollmentDate"
        value={formData.schoolEnrollmentDate}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </div>

  {/* Social Security Card Received */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">Social Security Card Received</label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="socialSecurityCardReceived"
            checked={formData.socialSecurityCardReceived}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="socialSecurityCardReceived"
            checked={!formData.socialSecurityCardReceived}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                socialSecurityCardReceived: !e.target.checked,
              }));
            }}
            className="mr-2"
          />
          No
        </label>
      </div>
      <input
        type="date"
        name="socialSecurityCardReceivedDate"
        value={formData.socialSecurityCardReceivedDate}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </div>

  {/* Social Security Application Submitted */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">Social Security Application Submitted</label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="socialSecurityApplicationSubmitted"
            checked={formData.socialSecurityApplicationSubmitted ?? false}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="socialSecurityApplicationSubmitted"
            checked={!formData.socialSecurityApplicationSubmitted}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                socialSecurityApplicationSubmitted: !e.target.checked,
              }));
            }}
            className="mr-2"
          />
          No
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="socialSecurityApplicationSubmitted"
            checked={formData.socialSecurityApplicationSubmitted === null}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                socialSecurityApplicationSubmitted: null,
              }));
            }}
            className="mr-2"
          />
          N/A
        </label>
      </div>
      <input
        type="date"
        name="socialSecurityApplicationSubmittedDate"
        value={formData.socialSecurityApplicationSubmittedDate}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </div>

  {/* Domestic Medical Screening Completed */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">Domestic Medical Screening Completed</label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="domesticMedicalScreeningCompleted"
            checked={formData.domesticMedicalScreeningCompleted ?? false}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="domesticMedicalScreeningCompleted"
            checked={!formData.domesticMedicalScreeningCompleted}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                domesticMedicalScreeningCompleted: !e.target.checked,
              }));
            }}
            className="mr-2"
          />
          No
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="domesticMedicalScreeningCompleted"
            checked={formData.domesticMedicalScreeningCompleted === null}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                domesticMedicalScreeningCompleted: null,
              }));
            }}
            className="mr-2"
          />
          N/A
        </label>
      </div>
      <input
        type="date"
        name="domesticMedicalScreeningCompletedDate"
        value={formData.domesticMedicalScreeningCompletedDate}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </div>

  {/* TB Medical Screening Completed */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">TB Medical Screening Completed</label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="tbiMedicalScreeningCompleted"
            checked={formData.tbiMedicalScreeningCompleted ?? false}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="tbiMedicalScreeningCompleted"
            checked={!formData.tbiMedicalScreeningCompleted}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                tbiMedicalScreeningCompleted: !e.target.checked,
              }));
            }}
            className="mr-2"
          />
          No
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="tbiMedicalScreeningCompleted"
            checked={formData.tbiMedicalScreeningCompleted === null}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                tbiMedicalScreeningCompleted: null,
              }));
            }}
            className="mr-2"
          />
          N/A
        </label>
      </div>
      <input
        type="date"
        name="tbiMedicalScreeningCompletedDate"
        value={formData.tbiMedicalScreeningCompletedDate}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </div>

  {/* Health Insurance Application Submitted */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">Health Insurance Application Submitted</label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="healthInsuranceApplicationSubmitted"
            checked={formData.healthInsuranceApplicationSubmitted ?? false}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="healthInsuranceApplicationSubmitted"
            checked={!formData.healthInsuranceApplicationSubmitted}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                healthInsuranceApplicationSubmitted: !e.target.checked,
              }));
            }}
            className="mr-2"
          />
          No
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="healthInsuranceApplicationSubmitted"
            checked={formData.healthInsuranceApplicationSubmitted === null}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                healthInsuranceApplicationSubmitted: null,
              }));
            }}
            className="mr-2"
          />
          N/A
        </label>
      </div>
      <input
        type="date"
        name="healthInsuranceApplicationSubmittedDate"
        value={formData.healthInsuranceApplicationSubmittedDate}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </div>

  {/* Health Insurance Enrollment */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">Health Insurance Enrollment</label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="healthInsuranceEnrollment"
            checked={formData.healthInsuranceEnrollment ?? false}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="healthInsuranceEnrollment"
            checked={!formData.healthInsuranceEnrollment}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                healthInsuranceEnrollment: !e.target.checked,
              }));
            }}
            className="mr-2"
          />
          No
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="healthInsuranceEnrollment"
            checked={formData.healthInsuranceEnrollment === null}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                healthInsuranceEnrollment: null,
              }));
            }}
            className="mr-2"
          />
          N/A
        </label>
      </div>
      <input
        type="date"
        name="healthInsuranceEnrollmentDate"
        value={formData.healthInsuranceEnrollmentDate}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </div>

  {/* SNAP Application Submitted */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">SNAP Application Submitted</label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="snapApplicationSubmitted"
            checked={formData.snapApplicationSubmitted ?? false}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="snapApplicationSubmitted"
            checked={!formData.snapApplicationSubmitted}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                snapApplicationSubmitted: !e.target.checked,
              }));
            }}
            className="mr-2"
          />
          No
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="snapApplicationSubmitted"
            checked={formData.snapApplicationSubmitted === null}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                snapApplicationSubmitted: null,
              }));
            }}
            className="mr-2"
          />
          N/A
        </label>
      </div>
      <input
        type="date"
        name="snapApplicationSubmittedDate"
        value={formData.snapApplicationSubmittedDate}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </div>

  {/* SNAP Approval */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">SNAP Approval</label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="snapApproval"
            checked={formData.snapApproval ?? false}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="snapApproval"
            checked={!formData.snapApproval}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                snapApproval: !e.target.checked,
              }));
            }}
            className="mr-2"
          />
          No
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="snapApproval"
            checked={formData.snapApproval === null}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                snapApproval: null,
              }));
            }}
            className="mr-2"
          />
          N/A
        </label>
      </div>
      <input
        type="date"
        name="snapApprovalDate"
        value={formData.snapApprovalDate}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </div>
</div>




{/* Initial Assessment */}
<div className="space-y-4">
  <h2 className="text-xl font-bold">INITIAL ASSESSMENT</h2>
  <table className="min-w-full bg-white border border-gray-300">
    <thead>
      <tr>
        <th className="px-4 py-2 border border-gray-300">Risk Domain</th>
        <th className="px-4 py-2 border border-gray-300">At-risk</th>
        <th className="px-4 py-2 border border-gray-300">Stable</th>
        <th className="px-4 py-2 border border-gray-300">Thriving</th>
        <th className="px-4 py-2 border border-gray-300">Notes</th>
      </tr>
    </thead>
    <tbody>
    {formData.initialAssessment.map((item, index) => (
  <tr key={index}>
    <td className="px-4 py-2 border border-gray-300">{item.riskDomain}</td>
    <td className="px-4 py-2 border border-gray-300 text-center">
      <input
        type="checkbox"
        name={`initialAssessment.${index}.atRisk`}
        checked={item.atRisk}
        onChange={handleChange}
        className="mr-2"
      />
    </td>
    <td className="px-4 py-2 border border-gray-300 text-center">
      <input
        type="checkbox"
        name={`initialAssessment.${index}.stable`}
        checked={item.stable}
        onChange={handleChange}
        className="mr-2"
      />
    </td>
    <td className="px-4 py-2 border border-gray-300 text-center">
      <input
        type="checkbox"
        name={`initialAssessment.${index}.thriving`}
        checked={item.thriving}
        onChange={handleChange}
        className="mr-2"
      />
    </td>
    <td className="px-4 py-2 border border-gray-300">
      <input
        type="text"
        name={`initialAssessment.${index}.notes`}
        value={item.notes}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </td>
  </tr>
))}
    </tbody>
  </table>
</div>








{/* HOUSING Section */}
<div className="space-y-4">
  <h2 className="text-xl font-bold">HOUSING</h2>

  {/* Temporary Housing */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">Temporary Housing</label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="temporaryHousing"
            checked={formData.temporaryHousing === true}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                temporaryHousing: e.target.checked ? true : null,
              }));
            }}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="temporaryHousing"
            checked={formData.temporaryHousing === false}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                temporaryHousing: e.target.checked ? false : null,
              }));
            }}
            className="mr-2"
          />
          No
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="temporaryHousing"
            checked={formData.temporaryHousing === null}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                temporaryHousing: e.target.checked ? null : false,
              }));
            }}
            className="mr-2"
          />
          N/A
        </label>
      </div>
      <input
        type="date"
        name="temporaryHousingDate"
        value={formData.temporaryHousingDate}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </div>

  {/* Temporary Housing Types */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">Temporary Housing Types</label>
      <div className="mt-2 space-y-2">
        {[
          "With Sponsor",
          "With Non Sponsor",
          "AirBnB",
          "Hotel",
          "Homeless Shelter",
          "Domestic Violence Shelter",
          "Transitional Shelter",
          "Sponsor Finances Housing",
        ].map((type, index) => (
          <label key={index} className="flex items-center">
            <input
              type="checkbox"
              name={`temporaryHousingType.${type}`}
              checked={formData.temporaryHousingType.includes(type)}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  temporaryHousingType: e.target.checked
                    ? [...prev.temporaryHousingType, type]
                    : prev.temporaryHousingType.filter((t) => t !== type),
                }));
              }}
              className="mr-2"
            />
            {type}
          </label>
        ))}
      </div>
    </div>
  </div>

  {/* Long Term Housing */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">Long Term Housing</label>
      <div className="flex items-center mt-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="longTermHousing"
            checked={formData.longTermHousing === true}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                longTermHousing: e.target.checked ? true : null,
              }));
            }}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            name="longTermHousing"
            checked={formData.longTermHousing === false}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                longTermHousing: e.target.checked ? false : null,
              }));
            }}
            className="mr-2"
          />
          No
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="longTermHousing"
            checked={formData.longTermHousing === null}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                longTermHousing: e.target.checked ? null : false,
              }));
            }}
            className="mr-2"
          />
          N/A
        </label>
      </div>
      <input
        type="date"
        name="longTermHousingDate"
        value={formData.longTermHousingDate}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </div>
</div>

{/* ADDITIONAL NOTES Section */}
<div className="space-y-4">
  <h2 className="text-xl font-bold">ADDITIONAL NOTES</h2>
  <div className="grid grid-cols-1 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
      <textarea
        name="additionalNotes"
        value={formData.additionalNotes}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        rows={4}
        placeholder="Enter any additional notes here..."
      />
    </div>
  </div>
</div>









{/* AUTHORIZATION TO RELEASE INFORMATION Section */}
<div className="space-y-4">
  <h2 className="text-xl font-bold">AUTHORIZATION TO RELEASE INFORMATION</h2>
  <div className="space-y-4">
    <p>
      Your Right to Privacy: You are being asked to sign a release of information that will allow agencies providing services to share information about you and your family! This information will allow these agencies to serve you better by helping them coordinate services and work together toward common goals.
      Your signature on this form is not required for treatment, payment, enrollment or eligibility for benefits. However, services requiring exchange of information with other providers may be limited without this specific authorization. You may revoke or cancel this authorization in writing at any time. You may also request that particular information be considered confidential. Your request will assure confidentiality of this particular information even if you have signed the release of information agreement. Your right to privacy is very important to all service providers. Only information that is essential to providing services will be shared with other agencies.
    </p>

    {/* Client Information */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Client Name</label>
        <input
          type="text"
          name="authorizationToReleaseInfo.clientInfo.clientName"
          value={formData.authorizationToReleaseInfo.clientInfo.clientName}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
        <input
          type="date"
          name="authorizationToReleaseInfo.clientInfo.dateOfBirth"
          value={formData.authorizationToReleaseInfo.clientInfo.dateOfBirth}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Case Number</label>
        <input
          type="text"
          name="authorizationToReleaseInfo.clientInfo.caseNumber"
          value={formData.authorizationToReleaseInfo.clientInfo.caseNumber}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Alien Number (Required for PC Clients)</label>
        <input
          type="text"
          name="authorizationToReleaseInfo.clientInfo.alienNumber"
          value={formData.authorizationToReleaseInfo.clientInfo.alienNumber}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Arrival Date</label>
        <input
          type="date"
          name="authorizationToReleaseInfo.clientInfo.arrivalDate"
          value={formData.authorizationToReleaseInfo.clientInfo.arrivalDate}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>

    {/* Minor Dependents */}
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">Minor Dependents</label>
      {formData.authorizationToReleaseInfo.minorDependents.map((dependent, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name={`authorizationToReleaseInfo.minorDependents.${index}`}
            value={dependent}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder={`Dependent ${index + 1}`}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => {
          setFormData((prev) => ({
            ...prev,
            authorizationToReleaseInfo: {
              ...prev.authorizationToReleaseInfo,
              minorDependents: [...prev.authorizationToReleaseInfo.minorDependents, ''],
            },
          }));
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Add Dependent
      </button>
    </div>

    {/* Information and Records */}
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">Information and Records</label>
      <textarea
        name="authorizationToReleaseInfo.informationAndRecords"
        value={formData.authorizationToReleaseInfo.informationAndRecords}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        rows={4}
        placeholder="Enter information and records here..."
      />
    </div>

    {/* Selected Information */}
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">Select Information to Release</label>
      {[
        "Psychiatric/Psychological/Mental Health Assessments, Diagnosis, Summaries, & Progress Reports",
        "Medical Information: Reports, History, Testing, Lab Work",
        "Medical Information related to HIV/AIDS or related illness",
        "Family History, Information, & Participation",
        "Admission & Discharge Summaries",
        "Chemical Dependency Assessments, Information, & Summaries",
        "Personal Identification",
        "Employment / Work Related Information",
        "Financial Information",
        "Educational Information, Transcripts, Current Grade Level, & Testing",
        "Progress Reports",
        "Referral Recommendations & Information",
        "Legal History",
        "Other",
      ].map((info, index) => (
        <label key={index} className="flex items-center">
          <input
            type="checkbox"
            name={`authorizationToReleaseInfo.selectedInformation.${info}`}
            checked={formData.authorizationToReleaseInfo.selectedInformation.includes(info)}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                authorizationToReleaseInfo: {
                  ...prev.authorizationToReleaseInfo,
                  selectedInformation: e.target.checked
                    ? [...prev.authorizationToReleaseInfo.selectedInformation, info]
                    : prev.authorizationToReleaseInfo.selectedInformation.filter((item) => item !== info),
                },
              }));
            }}
            className="mr-2"
          />
          {info}
        </label>
      ))}
    </div>

    {/* Service Providers */}
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">Service Providers</label>
      {[
        "Episcopal Migration Ministries",
        "US Department of State, Bureau of Population, Refugees, and Migration",
        "US Department of Health and Human Services, Office of Refugee Resettlement",
        "US Citizenship and Immigration Services",
        "US Social Security Administration",
        "State Office for Refugees",
        "English Language Schools/ Training Centers",
        "Health Screening Provider",
        "Health Department",
        "Local Department of Social Services",
        "School",
        "Vocational Rehabilitation Services",
        "Employer/Work Verification",
        "Medical Provider",
        "Other (specify)",
      ].map((provider, index) => (
        <label key={index} className="flex items-center">
          <input
            type="checkbox"
            name={`authorizationToReleaseInfo.serviceProviders.${provider}`}
            checked={formData.authorizationToReleaseInfo.serviceProviders.includes(provider)}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                authorizationToReleaseInfo: {
                  ...prev.authorizationToReleaseInfo,
                  serviceProviders: e.target.checked
                    ? [...prev.authorizationToReleaseInfo.serviceProviders, provider]
                    : prev.authorizationToReleaseInfo.serviceProviders.filter((item) => item !== provider),
                },
              }));
            }}
            className="mr-2"
          />
          {provider}
        </label>
      ))}
    </div>

    {/* Additional Special Instructions */}
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">Additional Special Instructions</label>
      <textarea
        name="authorizationToReleaseInfo.additionalSpecialInstructions"
        value={formData.authorizationToReleaseInfo.additionalSpecialInstructions}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        rows={4}
        placeholder="Enter any additional special instructions here..."
      />
    </div>
  </div>
</div>





{/* Table */}
<div className="mt-6">
  <table className="min-w-full bg-white border border-gray-300">
    <thead>
      <tr>
        <th className="px-4 py-2 border border-gray-300"></th>
        <th className="px-4 py-2 border border-gray-300">Print Name</th>
        <th className="px-4 py-2 border border-gray-300">Signature</th>
        <th className="px-4 py-2 border border-gray-300">Date</th>
      </tr>
    </thead>
    <tbody>
      {[
        { label: "Client*", key: "client" as keyof typeof formData.signatureTable },
        { label: "Parent, Guardian, Custodian for (M2-M6) (if applicable, print client name)", key: "guardian" as keyof typeof formData.signatureTable },
        { label: "Interpreter", key: "interpreter" as keyof typeof formData.signatureTable },
        { label: "Case Manager", key: "caseManager" as keyof typeof formData.signatureTable },
      ].map((row, index) => (
        <tr key={index}>
          <td className="px-4 py-2 border border-gray-300">{row.label}</td>
          <td className="px-4 py-2 border border-gray-300">
            <input
              type="text"
              name={`signatureTable.${row.key}.printName`}
              value={formData.signatureTable[row.key]?.printName || ""}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </td>
          <td className="px-4 py-2 border border-gray-300">
            <input
              type="text"
              name={`signatureTable.${row.key}.signature`}
              value={formData.signatureTable[row.key]?.signature || ""}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </td>
          <td className="px-4 py-2 border border-gray-300">
            <input
              type="date"
              name={`signatureTable.${row.key}.date`}
              value={formData.signatureTable[row.key]?.date || ""}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>






{/* Client Agreement Form */}
<div className="mt-10">
  <h2 className="text-2xl font-bold text-center">Client Agreement Form</h2>

  {/* Personal Information Fields */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
    <div>
      <label className="block text-sm font-medium text-gray-700">First Name</label>
      <input
        type="text"
        name="clientAgreement.firstName"
        value={formData.clientAgreement?.firstName || ""}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Last Name</label>
      <input
        type="text"
        name="clientAgreement.lastName"
        value={formData.clientAgreement?.lastName || ""}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Eligibility Date</label>
      <input
        type="date"
        name="clientAgreement.eligibilityDate"
        value={formData.clientAgreement?.eligibilityDate || ""}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Alien Number</label>
      <input
        type="text"
        name="clientAgreement.alienNumber"
        value={formData.clientAgreement?.alienNumber || ""}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Nationality</label>
      <input
        type="text"
        name="clientAgreement.nationality"
        value={formData.clientAgreement?.nationality || ""}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Date Enrolled</label>
      <input
        type="date"
        name="clientAgreement.dateEnrolled"
        value={formData.clientAgreement?.dateEnrolled || ""}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </div>

  {/* Preferred Communities GAPS Program Orientation */}
  <h3 className="mt-6 text-xl font-bold underline">Preferred Communities GAPS Program Orientation</h3>
  <p className="mt-2">
    The purpose of the Preferred Communities (PC) Program is to assist ORR-eligible clients in achieving self-sufficiency. The PC GAPS program is designed to fill the gaps in services for clients as they are identified through assessment. Should intensive or ongoing needs be identified, enrollment in the PC ICM program is to be considered. Enrollment in GAPS requires assessments, including a comprehensive intake assessment at enrollment. This program is funded by the U.S. government through the Office of Refugee Resettlement (ORR).
  </p>
  
  <ul className="mt-4 list-disc list-inside">
    <li>Case management (e.g., assistance preparing benefits documentation - Social Security, Employment Authorization Documents, driver's license, school enrollment)</li>
    <li>Providing interpretation and transportation assistance</li>
    <li>Referral to community services (e.g., domestic medical screening, counseling, food banks)</li>
    <li>Direct financial assistance</li>
    <li>Provision of extended cultural orientation</li>
  </ul>

  {/* Client Rights */}
  <h3 className="mt-6 text-xl font-bold underline">Client Rights</h3>
  <p className="mt-2 font-bold">1. The Right to Confidentiality:</p>
  <p>All information about you will be kept strictly confidential within Thrive International...</p>

  <p className="mt-2 font-bold">2. The Right to Complain and Follow the Grievance Procedure:</p>
  <p>If you have a concern or complaint about the PC services you receive, you have the right to submit your complaint...</p>

  <ul className="mt-2 list-disc list-inside">
    <li><strong>Case Manager:</strong> Maria Mykhailenko</li>
    <li><strong>Supervisor:</strong> Saw Gary</li>
    <li><strong>Director:</strong> Mark Finney</li>
    <li><strong>State Refugee Coordinator:</strong> Sarah K. Peterson</li>
  </ul>

  <p className="mt-2 font-bold">3. The Right to Refuse Services:</p>
  <p>Refusal of certain services may result in termination of public benefits and other consequences...</p>

  <p className="mt-2 font-bold">4. The Right to Non-Discrimination:</p>
  <p>You have the right to receive services without discrimination based on age, color, race, disability...</p>

  <p className="mt-2 font-bold">5. The Right to Interpretation:</p>
  <p>You have the right to interpretation for PC services as applicable...</p>

  {/* Client Responsibilities */}
  <h3 className="mt-6 text-xl font-bold underline">Client Responsibilities</h3>
  <ul className="mt-2 list-disc list-inside">
    <li>I will keep all scheduled appointments and give 24-hour notice if I need to cancel.</li>
    <li>I will inform PC staff of any changes to my address, phone number, or benefits within 10 days.</li>
    <li>I will inform my PC Case Manager if I have unique scheduling needs.</li>
    <li>I will be transparent about my financial situation and job status.</li>
    <li>I will treat PC and agency staff with respect.</li>
  </ul>

  {/* Non-Compliance Policy */}
  <h3 className="mt-6 text-xl font-bold underline">Non-Compliance Policy</h3>
  <p>If I do not comply with the terms of this agreement, I understand that I may be denied services at the discretion of the PC program.</p>

  <ul className="mt-2 list-disc list-inside">
    <li>Failing or refusing to participate in assessments as applicable</li>
    <li>Failing to provide accurate legal and financial information</li>
    <li>Leaving the service area without informing the agency</li>
    <li>Receiving PC services from another resettlement agency without informing PC staff</li>
    <li>Refusing to take a job in order to receive financial assistance</li>
    <li>Leaving a job to receive financial assistance</li>
  </ul>
</div>



{/* CERTIFICATION OF AGREEMENT Section */}
<div className="mt-10">
  <h2 className="text-2xl font-bold text-center">CERTIFICATION OF AGREEMENT</h2>
  <p className="mt-4">
    By signing below, I acknowledge that I understand and agree to the terms outlined in the agreement.
  </p>

  {/* Interpretation Options */}
  <div className="mt-6 space-y-4">
    <label className="block text-sm font-medium text-gray-700">
      Select One:
    </label>
    <div className="flex items-center">
      <input
        type="checkbox"
        name="interpretationProvided"
        checked={formData.interpretationProvided || false}
        onChange={handleChange}
        className="mr-2"
      />
      <span>Interpretation was provided in the following language:</span>
      <input
        type="text"
        name="interpretationLanguage"
        value={formData.interpretationLanguage || ""}
        onChange={handleChange}
        className="ml-2 p-2 border border-gray-300 rounded-md"
        placeholder="Enter language"
      />
    </div>

    {/* Interpretation Method */}
    {formData.interpretationProvided && (
      <div className="ml-6 space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Interpretation Method:
        </label>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="interpretationInPerson"
            checked={formData.interpretationInPerson || false}
            onChange={handleChange}
            className="mr-2"
          />
          <span>In Person</span>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="interpretationPhone"
            checked={formData.interpretationPhone || false}
            onChange={handleChange}
            className="mr-2"
          />
          <span>Phone</span>
        </div>

        {/* In Person Details */}
        {formData.interpretationInPerson && (
          <div className="ml-6 space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              In Person Interpretation Provided By:
            </label>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="interpretationInPersonStaff"
                checked={formData.interpretationInPersonStaff || false}
                onChange={handleChange}
                className="mr-2"
              />
              <span>Staff</span>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="interpretationInPersonFamily"
                checked={formData.interpretationInPersonFamily || false}
                onChange={handleChange}
                className="mr-2"
              />
              <span>Adult Family Member</span>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="interpretationInPersonContract"
                checked={formData.interpretationInPersonContract || false}
                onChange={handleChange}
                className="mr-2"
              />
              <span>Contract Interpreter</span>
            </div>
          </div>
        )}

        {/* Phone Details */}
        {formData.interpretationPhone && (
          <div className="ml-6 space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Interpreter ID:
            </label>
            <input
              type="text"
              name="interpreterId"
              value={formData.interpreterId || ""}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Enter Interpreter ID"
            />
          </div>
        )}
      </div>
    )}

    {/* No Interpretation Needed */}
    <div className="flex items-center">
      <input
        type="checkbox"
        name="noInterpretationNeeded"
        checked={formData.noInterpretationNeeded || false}
        onChange={handleChange}
        className="mr-2"
      />
      <span>I am fluent in English and read this form without the use of an interpreter.</span>
    </div>
  </div>

  {/* Signature Fields */}
  <div className="mt-6 space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          PC Client Name (Type)
        </label>
        <input
          type="text"
          name="clientName"
          value={formData.clientName || ""}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Client Signature
        </label>
        <input
          type="text"
          name="clientSignature"
          value={formData.clientSignature || ""}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          name="clientSignatureDate"
          value={formData.clientSignatureDate || ""}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>

    <hr className="my-6 border-t-2 border-gray-300"/>
    <hr className="my-6 border-t-2 border-gray-300"/>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Parent/Guardian/Caregiver Name (Type)
        </label>
        <input
          type="text"
          name="guardianName"
          value={formData.guardianName || ""}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Parent/Guardian/Caregiver Signature
        </label>
        <input
          type="text"
          name="guardianSignature"
          value={formData.guardianSignature || ""}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          name="guardianSignatureDate"
          value={formData.guardianSignatureDate || ""}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>

    <hr className="my-6 border-t-2 border-gray-300"/>
    <hr className="my-6 border-t-2 border-gray-300"/>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          PC Staff Name (Type)
        </label>
        <input
          type="text"
          name="staffName"
          value={formData.staffName || ""}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          PC Staff Signature
        </label>
        <input
          type="text"
          name="staffSignature"
          value={formData.staffSignature || ""}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          name="staffSignatureDate"
          value={formData.staffSignatureDate || ""}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>



    <hr className="my-6 border-t-2 border-gray-300"/>
    <hr className="my-6 border-t-2 border-gray-300"/>



    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          PC Interpreter Name (Type)
        </label>
        <input
          type="text"
          name="interpreterName"
          value={formData.interpreterName || ""}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          PC Interpreter Signature
        </label>
        <input
          type="text"
          name="interpreterSignature"
          value={formData.interpreterSignature || ""}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          name="interpreterSignatureDate"
          value={formData.interpreterSignatureDate || ""}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
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
>>>>>>> Stashed changes
        </div>
      </form>
    </div>
  );
};

<<<<<<< Updated upstream
export default ThriveIntakeForm;
=======
export default EpiscopalPreferredCommunitiesIntakeForm;
>>>>>>> Stashed changes
