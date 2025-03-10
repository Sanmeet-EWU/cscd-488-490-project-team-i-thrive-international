import React, { useState, ChangeEvent } from 'react';
import { submitForm } from "../../services/apiService"; // Import the API function

interface NewStudentRegistrationFormData {
  student: {
    firstName: string;
    lastName: string;
    birthDate: string;
    address: string;
    gender: string;
    school: string;
    currentGrade: string;
    languagesSpoken: string;
    countryOfOrigin: string;
  };
  parent: {
    parentName: string;
    languagesSpoken: string;
    parentPhoneNumber: string;
    parentEmail: string;
    preferredContactMethod: string;
  };
  liability: {
    insuranceLiability: boolean;
    insuranceLiabilitySignature: string;
    waiverAndRelease: boolean;
    waiverAndReleaseSignature: string;
    mediaRelease: boolean;
    mediaReleaseSignature: string;
  };
}

const NewStudentRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<NewStudentRegistrationFormData>({
    student: {
      firstName: '',
      lastName: '',
      birthDate: '',
      address: '',
      gender: '',
      school: '',
      currentGrade: '',
      languagesSpoken: '',
      countryOfOrigin: '',
    },
    parent: {
      parentName: '',
      languagesSpoken: '',
      parentPhoneNumber: '',
      parentEmail: '',
      preferredContactMethod: 'Email',
    },
    liability: {
      insuranceLiability: false,
      insuranceLiabilitySignature: '',
      waiverAndRelease: false,
      waiverAndReleaseSignature: '',
      mediaRelease: false,
      mediaReleaseSignature: '',
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    if (type === 'checkbox') {
      const [section, field] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section as keyof typeof formData],
          [field]: checked,
        },
      }));
    } else {
      const [section, field] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section as keyof typeof formData],
          [field]: value,
        },
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await submitForm("NewStudentRegistration", formData);
      alert("✅ Form submitted successfully!");
      console.log("Response:", response);
    } catch (error) {
      if (error instanceof Error) {
        alert("❌ Failed to submit form: " + error.message);
      } else {
        alert("❌ Failed to submit form");
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">New Student Registration Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Student Details */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Student Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="student.firstName"
                value={formData.student.firstName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="student.lastName"
                value={formData.student.lastName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Birth Date</label>
              <input
                type="date"
                name="student.birthDate"
                value={formData.student.birthDate}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="student.address"
                value={formData.student.address}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <input
                type="text"
                name="student.gender"
                value={formData.student.gender}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">School</label>
              <input
                type="text"
                name="student.school"
                value={formData.student.school}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Current Grade</label>
              <input
                type="text"
                name="student.currentGrade"
                value={formData.student.currentGrade}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Languages Spoken</label>
              <input
                type="text"
                name="student.languagesSpoken"
                value={formData.student.languagesSpoken}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Country of Origin</label>
              <input
                type="text"
                name="student.countryOfOrigin"
                value={formData.student.countryOfOrigin}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
        </div>

        {/* Parent Details */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Parent Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Parent Name</label>
              <input
                type="text"
                name="parent.parentName"
                value={formData.parent.parentName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Languages Spoken</label>
              <input
                type="text"
                name="parent.languagesSpoken"
                value={formData.parent.languagesSpoken}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Parent Phone Number</label>
              <input
                type="tel"
                name="parent.parentPhoneNumber"
                value={formData.parent.parentPhoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Parent Email</label>
              <input
                type="email"
                name="parent.parentEmail"
                value={formData.parent.parentEmail}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Contact Method</label>
              <select
                name="parent.preferredContactMethod"
                value={formData.parent.preferredContactMethod}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
              </select>
            </div>
          </div>
        </div>

        {/* Liability */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Liability</h2>

          {/* Insurance Liability */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Insurance Liability</h3>
            <p className="text-sm text-gray-700">
              I understand that Thrive International does not provide medical insurance for my child for the purposes of this programming, and I am solely responsible for providing such insurance and for payment of any medical treatment expenses for my child that are not covered by insurance.
            </p>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="liability.insuranceLiability"
                checked={formData.liability.insuranceLiability}
                onChange={handleChange}
                className="mr-2"
                required
              />
              I have read the foregoing information, verifying its accuracy, and agree to the statements made above.
            </label>
            <div>
              <label className="block text-sm font-medium text-gray-700">Parent/Guardian Signature</label>
              <input
                type="text"
                name="liability.insuranceLiabilitySignature"
                value={formData.liability.insuranceLiabilitySignature}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          {/* Waiver & Release of Liability */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Waiver & Release of Liability/General Liability Release of Claims</h3>
            <p className="text-sm text-gray-700">
              Effective immediately upon signing, I release Thrive International, their agents, employees and personal representatives, affiliates, successors and assigns, and any and all persons, firms or corporations liable or who might be claimed to be liable, whether or not herein named, none of whom admit any liability to the undersigned, but all expressly denying liability, from any and all claims, demands, damages, actions, causes of action or suits of any kind or nature whatsoever, which I now have or may hereafter have, arising out of or in any way relating to any and all injuries and damages of any and every kind, to both person and property, and also any and all injuries and damages that may develop in the future, as a result of or in any way relating to activities overseen, provided or sponsored by Thrive International.
            </p>
            <p className="text-sm text-gray-700">
              This Release may not be altered, amended, or modified except by a written document signed by both parties.
            </p>
            <p className="text-sm text-gray-700">
              Furthermore, this Release shall be binding upon the undersigned, and his respective heirs, executors, administrators, personal representatives, successors, and assigns. This Release shall be subject to and governed by the laws of the State of Washington.
            </p>
            <p className="text-sm text-gray-700">
              This Release has been carefully read and fully understood by the undersigned. The terms have been explained to me, and I am freely, knowingly, and voluntarily entering into this Release.
            </p>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="liability.waiverAndRelease"
                checked={formData.liability.waiverAndRelease}
                onChange={handleChange}
                className="mr-2"
                required
              />
              I agree to the terms of the Waiver & Release of Liability.
            </label>
            <div>
              <label className="block text-sm font-medium text-gray-700">Parent/Guardian Signature</label>
              <input
                type="text"
                name="liability.waiverAndReleaseSignature"
                value={formData.liability.waiverAndReleaseSignature}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          {/* Media Release */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Media Release</h3>
            <p className="text-sm text-gray-700">
              By signing this release form, I authorize Thrive International to use the following personal information:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>My picture – including photographic, motion picture, and electronic (video) images.</li>
              <li>My voice – including sound and video recordings.</li>
            </ul>
            <p className="text-sm text-gray-700">
              I hereby grant to Thrive International, its subsidiaries, licensees, successors and assigns, the right to use, publish, and reproduce, for all purposes, my name, pictures of me in film or electronic (video) form, sound and video recordings of my voice, and printed and electronic copy of the information described in sections (1) and (2) above in any and all media including, without limitation, cable and broadcast television and the Internet, and for exhibition, distribution, promotion, advertising, sale, press conferences, meetings, hearings, educational conferences and in brochures and other print media. This permission extends to all languages, media, formats and markets now known or hereafter devised. This permission shall continue perpetuity.
            </p>
            <p className="text-sm text-gray-700">
              I further grant Thrive International all right, title, and interest that I may have in all finished pictures, negatives, reproductions, and copies of the original print, and further grant Thrive International the right to give, sell, transfer, and exhibit the print in copies or facsimiles thereof, for marketing, communications, or advertising purposes, as it deems fit.
            </p>
            <p className="text-sm text-gray-700">
              I hereby waive the right to receive any payment for signing this release and waive the right to receive any payment for use of any of the material described above for any of the purposes authorized by this release. I also waive any right to inspect or approve finished photographs, audio, video, multimedia, or advertising recordings and copy or printed matter or computer generated scanned image and other electronic media that may be used in conjunction therewith or to approve the eventual use that it might be applied.
            </p>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="liability.mediaRelease"
                checked={formData.liability.mediaRelease}
                onChange={handleChange}
                className="mr-2"
                required
              />
              I agree to the terms of the Media Release.
            </label>
            <div>
              <label className="block text-sm font-medium text-gray-700">Parent/Guardian Signature</label>
              <input
                type="text"
                name="liability.mediaReleaseSignature"
                value={formData.liability.mediaReleaseSignature}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
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
        </div>
      </form>
    </div>
  );
};

export default NewStudentRegistrationForm;