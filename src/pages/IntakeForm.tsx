import React, { useState } from 'react';

const IntakeForm: React.FC = () => {
  const [formData, setFormData] = useState<{
    fullName: string;
    dateOfBirth: string;
    gender: string;
    email: string;
    phone: string;
    countryOfOrigin: string;
    dateOfArrival: string;
    immigrationStatus: string;
    supportNeeds: {
      employment: boolean;
      housing: boolean;
      education: boolean;
      languageClasses: boolean;
      other: string;
    };
    emergencyContact: {
      name: string;
      relationship: string;
      phone: string;
      email: string;
    };
    additionalNotes: string;
  }>({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    countryOfOrigin: '',
    dateOfArrival: '',
    immigrationStatus: '',
    supportNeeds: {
      employment: false,
      housing: false,
      education: false,
      languageClasses: false,
      other: '',
    },
    emergencyContact: {
      name: '',
      relationship: '',
      phone: '',
      email: '',
    },
    additionalNotes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      supportNeeds: {
        ...prev.supportNeeds,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add submission logic here (e.g., API call)
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-indigo-900 mb-4">Intake Form</h2>

      {/* Support Needs */}
      <fieldset>
        <legend className="block text-sm font-medium text-gray-700">Support Needs</legend>
        <div className="mt-4 space-y-2">
          {(['employment', 'housing', 'education', 'languageClasses'] as const).map((need) => (
            <div key={need}>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name={need}
                  checked={!!formData.supportNeeds[need as keyof typeof formData.supportNeeds]} // Ensure boolean value
                  onChange={handleCheckboxChange}
                  className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                />
                <span className="ml-2 capitalize">{need.replace(/([A-Z])/g, ' $1')}</span>
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700"
      >
        Submit
      </button>
    </form>
  );
};

export default IntakeForm;
