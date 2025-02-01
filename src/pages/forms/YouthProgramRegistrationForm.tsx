import React, { useState, ChangeEvent } from 'react';

interface FormData {
  participantFullName: string;
  dateOfBirth: string;
  age: string;
  grade: string;
  gender: string;
  school: string;
  parentGuardianName: string;
  parentGuardianPhoneNumber: string;
  parentEmail: string;
  address: string;
  insuranceProvider: string;
  policyNumber: string;
  allergiesMedicalConcerns: string;
  parentSignature: string;
  parentSignatureDate: string;
  participantPhoneNumber: string;
  participantEmail: string;
  primaryPhysician: string;
  primaryPhysicianPhoneNumber: string;
  physicianAddress: string;
  tShirtSize: string;
  waiverInitial: string;
  mediaReleaseInitial: string;
  participantSignature: string;
  participantSignatureDate: string;
  parentName: string;
  parentSignatureWaiver: string;
  parentSignatureDateWaiver: string;
}

const YouthProgramRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    participantFullName: '',
    dateOfBirth: '',
    age: '',
    grade: '',
    gender: '',
    school: '',
    parentGuardianName: '',
    parentGuardianPhoneNumber: '',
    parentEmail: '',
    address: '',
    insuranceProvider: '',
    policyNumber: '',
    allergiesMedicalConcerns: '',
    parentSignature: '',
    parentSignatureDate: '',
    participantPhoneNumber: '',
    participantEmail: '',
    primaryPhysician: '',
    primaryPhysicianPhoneNumber: '',
    physicianAddress: '',
    tShirtSize: '',
    waiverInitial: '',
    mediaReleaseInitial: '',
    participantSignature: '',
    participantSignatureDate: '',
    parentName: '',
    parentSignatureWaiver: '',
    parentSignatureDateWaiver: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Thrive International Youth Program: Registration Information
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Participant Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Participant’s Full Name</label>
            <input
              type="text"
              name="participantFullName"
              value={formData.participantFullName}
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
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Grade</label>
            <input
              type="text"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">School</label>
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Parent/Guardian Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Parent/Guardian Name</label>
            <input
              type="text"
              name="parentGuardianName"
              value={formData.parentGuardianName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Parent/Guardian Phone Number</label>
            <input
              type="tel"
              name="parentGuardianPhoneNumber"
              value={formData.parentGuardianPhoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Parent Email</label>
            <input
              type="email"
              name="parentEmail"
              value={formData.parentEmail}
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
            />
          </div>
        </div>

        {/* Insurance Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Insurance Provider</label>
            <input
              type="text"
              name="insuranceProvider"
              value={formData.insuranceProvider}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Policy Number</label>
            <input
              type="text"
              name="policyNumber"
              value={formData.policyNumber}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Allergies/Medical Concerns */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Allergies/Medical Concerns/Medications</label>
          <textarea
            name="allergiesMedicalConcerns"
            value={formData.allergiesMedicalConcerns}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows={3}
          />
        </div>

        {/* Medical Insurance Acknowledgment */}
        <div className="space-y-4">
          <p className="text-gray-700">
            I understand that Thrive International does not provide medical insurance for my child
            for the purposes of this programming, and I am solely responsible for providing such
            insurance and for payment of any medical treatment expenses for my child that are not
            covered by insurance.
          </p>
          <p className="text-gray-700">
            I have read the foregoing information, verifying its accuracy, and agree to the
            statements made above:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Parent/Guardian Signature</label>
              <input
                type="text"
                name="parentSignature"
                value={formData.parentSignature}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date Signed</label>
              <input
                type="date"
                name="parentSignatureDate"
                value={formData.parentSignatureDate}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Additional Optional Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">ADDITIONAL OPTIONAL INFORMATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Participant Phone Number</label>
              <input
                type="tel"
                name="participantPhoneNumber"
                value={formData.participantPhoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Participant Email</label>
              <input
                type="email"
                name="participantEmail"
                value={formData.participantEmail}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Primary Physician</label>
              <input
                type="text"
                name="primaryPhysician"
                value={formData.primaryPhysician}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Primary Physician Phone Number</label>
              <input
                type="tel"
                name="primaryPhysicianPhoneNumber"
                value={formData.primaryPhysicianPhoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Physician Address</label>
              <input
                type="text"
                name="physicianAddress"
                value={formData.physicianAddress}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">T-Shirt Size</label>
              <select
                name="tShirtSize"
                value={formData.tShirtSize}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
          </div>
        </div>

        {/* Thrive International Youth Program Waiver */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Thrive International Youth Program Waiver</h2>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Waiver & Release of Liability/General Liability Release of Claims</h3>
            <p className="text-gray-700">
                Effective immediately upon signing, I release Thrive International, their agents, employees and personal
              representatives, affiliates, successors and assigns, and any and all persons, firms or corporations liable or who might be
              claimed to be liable, whether or not herein named, none of whom admit any liability to the undersigned, but all expressly
              denying liability, from any and all claims, demands, damages, actions, causes of action or suits of any kind or nature
              whatsoever, which I now have or may hereafter have, arising out of or in any way relating to any and all injuries and
              damages of any and every kind, to both person and property, and also any and all injuries and damages that may develop in
              the future, as a result of or in any way relating to activities overseen, provided or sponsored by Thrive International.
                This Release may not be altered, amended, or modified except by a written document signed by both parties.
                Furthermore, this Release shall be binding upon the undersigned, and his respective heirs, executors,
              administrators, personal representatives, successors, and assigns. This Release shall be subject to and governed by the
              laws of the State of Washington.
                This Release has been carefully read and fully understood by the undersigned. The terms have been explained to
              me, and I am freely, knowingly, and voluntarily entering into this Release.
            </p>
            <div>
              <label className="block text-sm font-medium text-gray-700">Guardian Initial (Or 18+)</label>
              <input
                type="text"
                name="waiverInitial"
                value={formData.waiverInitial}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Media Release</h3>
            <p className="text-gray-700">
              By signing this release form, I authorize Thrive, to use the following personal information:
                - My picture - including photographic, motion picture, and electronic (video) images.
                - My voice - including sound and video recordings.
              I hereby grant to Thrive International, its subsidiaries, licensees, successors and assigns, the right to use, publish, and
              reproduce, for all purposes, my name, pictures of me in film or electronic (video) form, sound and video recordings of my
              voice, and printed and electronic copy of the information described in sections (1) and (2) above in any and all media
              including, without limitation, cable and broadcast television and the Internet, and for exhibition, distribution, promotion,
              advertising, sale, press conferences, meetings, hearings, educational conferences and in brochures and other print media.
              This permission extends to all languages, media, formats and markets now known or hereafter devised. This permission
              shall continue perpetuity.
                I further grant Thrive International all right, title, and interest that I may have in all finished pictures, negatives,
              reproductions, and copies of the original print, and further grant Thrive International the right to give, sell, transfer, and
              exhibit the print in copies or facsimiles thereof, for marketing, communications, or advertising purposes, as it deems fit.
                I hereby waive the right to receive any payment for signing this release and waive the right to receive any payment
              for use of any of the material described above for any of the purposes authorized by this release. I also waive any right to
              inspect or approve finished photographs, audio, video, multimedia, or advertising recordings and copy or printed matter or
              computer generated scanned image and other electronic media that may be used in conjunction therewith or to approve the
              eventual use that it might be applied.
            </p>
            <div>
              <label className="block text-sm font-medium text-gray-700">Guardian Initial (Or 18+)</label>
              <input
                type="text"
                name="mediaReleaseInitial"
                value={formData.mediaReleaseInitial}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700">
              I acknowledge that I have read the foregoing and I fully understand the contents.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Participant Name</label>
                <input
                  type="text"
                  name="participantFullName"
                  value={formData.participantFullName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Participant Signature</label>
                <input
                  type="text"
                  name="participantSignature"
                  value={formData.participantSignature}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  name="participantSignatureDate"
                  value={formData.participantSignatureDate}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Parent Name</label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Parent Signature</label>
                <input
                  type="text"
                  name="parentSignatureWaiver"
                  value={formData.parentSignatureWaiver}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  name="parentSignatureDateWaiver"
                  value={formData.parentSignatureDateWaiver}
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
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default YouthProgramRegistrationForm;