// CulturalIntegrationProgram.tsx
import React, { useState } from 'react';

interface FormData {
  participantName: string;
  participantSignature: string;
  date: string;
  mediaRelease: {
    picture: boolean;
    voice: boolean;
  };
}

const CulturalIntegrationProgram: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    participantName: '',
    participantSignature: '',
    date: '',
    mediaRelease: {
      picture: false,
      voice: false,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (field: 'picture' | 'voice') => {
    setFormData(prev => ({
      ...prev,
      mediaRelease: {
        ...prev.mediaRelease,
        [field]: !prev.mediaRelease[field]
      }
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Cultural Integration Program</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Waiver & Release of Liability</h2>
          <div className="text-sm space-y-4">
            <p>
              Effective immediately upon signing, I release Thrive International, their agents, employees and personal
              representatives, affiliates, successors and assigns, and any and all persons, firms or corporations liable or who might be
              claimed to be liable, whether or not herein named, none of whom admit any liability to the undersigned, but all expressly
              denying liability, from any and all claims, demands, damages, actions, causes of action or suits of any kind or nature
              whatsoever, which I now have or may hereafter have, arising out of or in any way relating to any and all injuries and
              damages of any and every kind, to both person and property, and also any and all injuries and damages that may develop in
              the future, as a result of or in any way relating to activities overseen, provided or sponsored by Thrive International.
            </p>
            <p>
              This Release may not be altered, amended, or modified except by a written document signed by both parties.
              Furthermore, this Release shall be binding upon the undersigned, and his respective heirs, executors,
              administrators, personal representatives, successors, and assigns. This Release shall be subject to and governed by the
              laws of the State of Washington.
            </p>
            <p>
              This Release has been carefully read and fully understood by the undersigned. The terms have been explained to
              me, and I am freely, knowingly, and voluntarily entering into this Release.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Media Release</h2>
          <p className="text-sm mb-4">
            By signing this release form, I authorize Thrive, to use the following personal information:
          </p>
          
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.mediaRelease.picture}
                onChange={() => handleCheckboxChange('picture')}
                className="w-4 h-4"
              />
              <span className="text-sm">
                My picture - including photographic, motion picture, and electronic (video) images.
              </span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.mediaRelease.voice}
                onChange={() => handleCheckboxChange('voice')}
                className="w-4 h-4"
              />
              <span className="text-sm">
                My voice - including sound and video recordings.
              </span>
            </label>
          </div>

          <div className="text-sm space-y-2 mt-4">
            <p>
              I hereby grant to Thrive International, its subsidiaries, licensees, successors and assigns, the right to use, publish, and
              reproduce, for all purposes, my name, pictures of me in film or electronic (video) form, sound and video recordings of my
              voice, and printed and electronic copy of the information described in sections (1) and (2) above in any and all media
              including, without limitation, cable and broadcast television and the Internet, and for exhibition, distribution, promotion,
              advertising, sale, press conferences, meetings, hearings, educational conferences and in brochures and other print media.
              This permission extends to all languages, media, formats and markets now known or hereafter devised. This permission
              shall continue perpetuity.
            </p>
            <p>
              I further grant Thrive International all right, title, and interest that I may have in all finished pictures, negatives,
              reproductions, and copies of the original print, and further grant Thrive International the right to give, sell, transfer, and
              exhibit the print in copies or facsimiles thereof, for marketing, communications, or advertising purposes, as it deems fit.
            </p>
            <p>
              I hereby waive the right to receive any payment for signing this release and waive the right to receive any payment
              for use of any of the material described above for any of the purposes authorized by this release. I also waive any right to
              inspect or approve finished photographs, audio, video, multimedia, or advertising recordings and copy or printed matter or
              computer-generated scanned image and other electronic media that may be used in conjunction therewith or to approve the
              eventual use that it might be applied.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Participant Name
              <input
                type="text"
                name="participantName"
                value={formData.participantName}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </label>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Participant Signature
              <input
                type="text"
                name="participantSignature"
                value={formData.participantSignature}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </label>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Date
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default CulturalIntegrationProgram;