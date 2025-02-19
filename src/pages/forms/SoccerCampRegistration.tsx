import React, { useState, ChangeEvent, FormEvent } from 'react';

interface SoccerCampRegistrationData {
  participantName: string;
  birthDate: string;
  gender: string;
  address: string;
  countryOfOrigin: string;
  languagesSpoken: string;
  shirtSize: string;
  parentGuardianName: string;
  bestContactNumber: string;
  email: string;
  parentGuardianSignature: string;
  waiverSignature: string;
  mediaReleaseSignature: string;
}

const SoccerCampRegistration: React.FC = () => {
  const [formData, setFormData] = useState<SoccerCampRegistrationData>({
    participantName: '',
    birthDate: '',
    gender: '',
    address: '',
    countryOfOrigin: '',
    languagesSpoken: '',
    shirtSize: '',
    parentGuardianName: '',
    bestContactNumber: '',
    email: '',
    parentGuardianSignature: '',
    waiverSignature: '',
    mediaReleaseSignature: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Soccer Camp Registration Data:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Soccer Camp Registration</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Student Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Student Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Participant Name</label>
              <input
                type="text"
                name="participantName"
                value={formData.participantName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Birth Date</label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
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
              <label className="block text-sm font-medium text-gray-700">Country of Origin</label>
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
              <label className="block text-sm font-medium text-gray-700">Languages Spoken</label>
              <input
                type="text"
                name="languagesSpoken"
                value={formData.languagesSpoken}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Shirt Size</label>
              <select
                name="shirtSize"
                value={formData.shirtSize}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select Size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
          </div>
        </div>

        {/* Liability */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Liability</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Parent/Guardian Name</label>
              <input
                type="text"
                name="parentGuardianName"
                value={formData.parentGuardianName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Best Contact Number</label>
              <input
                type="tel"
                name="bestContactNumber"
                value={formData.bestContactNumber}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
        </div>

        {/* Insurance Liability */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Insurance Liability</h2>
          <p className="text-sm text-gray-700">
            I understand that Thrive International does not provide medical insurance for my child for the purposes of this programming, and I am solely responsible for providing such insurance and for payment of any medical treatment expenses for my child that are not covered by insurance.
          </p>
          <p className="text-sm text-gray-700">
            I have read the foregoing information, verifying its accuracy, and agree to the statements made above:
          </p>
          <div>
            <label className="block text-sm font-medium text-gray-700">Parent/Guardian Signature</label>
            <input
              type="text"
              name="parentGuardianSignature"
              value={formData.parentGuardianSignature}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        {/* Waiver & Release of Liability */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Waiver & Release of Liability</h2>
          <p className="text-sm text-gray-700">
            Effective immediately upon signing, I release Thrive International, their agents, employees and personal representatives, affiliates, successors and assigns, and any and all persons, firms or corporations liable or who might be claimed to be liable, whether or not herein named, none of whom admit any liability to the undersigned, but all expressly denying liability, from any and all claims, demands, damages, actions, causes of action or suits of any kind or nature whatsoever, which I now have or may hereafter have, arising out of or in any way relating to any and all injuries and damages of any and every kind, to both person and property, and also any and all injuries and damages that may develop in the future, as a result of or in any way relating to activities overseen, provided or sponsored by Thrive International.
          </p>
          <p className="text-sm text-gray-700">
            This Release may not be altered, amended, or modified except by a written document signed by both parties.
          </p>
          <p className="text-sm text-gray-700">
            Furthermore, this Release shall be binding upon the undersigned, and his respective heirs, executors, administrators, personal representatives, successors, and assigns. This Release shall be subject to and governed by the laws of the State of Washington. This Release has been carefully read and fully understood by the undersigned. The terms have been explained to me, and I am freely, knowingly, and voluntarily entering into this Release.
          </p>
          <div>
            <label className="block text-sm font-medium text-gray-700">Parent/Guardian Signature</label>
            <input
              type="text"
              name="waiverSignature"
              value={formData.waiverSignature}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        {/* Media Release */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Media Release</h2>
          <p className="text-sm text-gray-700">
            By signing this release form, I authorize Thrive International to use the following personal information:
          </p>
          <ul className="text-sm text-gray-700 list-disc list-inside">
            <li>My picture - including photographic, motion picture, and electronic (video) images.</li>
            <li>My voice - including sound and video recordings.</li>
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
          <div>
            <label className="block text-sm font-medium text-gray-700">Parent/Guardian Signature</label>
            <input
              type="text"
              name="mediaReleaseSignature"
              value={formData.mediaReleaseSignature}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
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

export default SoccerCampRegistration;