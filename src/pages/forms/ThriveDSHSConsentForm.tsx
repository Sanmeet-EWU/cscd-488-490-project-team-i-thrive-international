import React, { useState, ChangeEvent } from 'react';

interface ChildInfo {
  name: string;
  dateOfBirth: string;
}

interface ThriveDSHSConsentFormData {
  participantName: string;
  participantSignature: string;
  signatureDate: string;
  children: ChildInfo[];
}

const ThriveDSHSConsentForm: React.FC = () => {
  const [formData, setFormData] = useState<ThriveDSHSConsentFormData>({
    participantName: '',
    participantSignature: '',
    signatureDate: '',
    children: [{ name: '', dateOfBirth: '' }], // Initialize with one child field
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChildChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedChildren = [...formData.children];
    updatedChildren[index] = {
      ...updatedChildren[index],
      [name]: value,
    };
    setFormData((prev) => ({
      ...prev,
      children: updatedChildren,
    }));
  };

  const addChildField = () => {
    setFormData((prev) => ({
      ...prev,
      children: [...prev.children, { name: '', dateOfBirth: '' }],
    }));
  };

  const removeChildField = (index: number) => {
    const updatedChildren = formData.children.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      children: updatedChildren,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Thrive/DSHS Consent Form Data:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Thrive / DSHS Consent Form
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Participant Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            I,{' '}
            <input
              type="text"
              name="participantName"
              value={formData.participantName}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Participant Name"
              required
            />
            , by responding to this request for information, I understand that Thrive International may use my personal information to assist me in securing benefits or services. Thrive International may also share my personal information with consulting immigration attorneys, DSHS, or other community partners if doing so might assist me in securing immigration or other benefits.
          </label>
        </div>

        {/* Signature and Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Signature
            </label>
            <input
              type="text"
              name="participantSignature"
              value={formData.participantSignature}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Signature
            </label>
            <input
              type="date"
              name="signatureDate"
              value={formData.signatureDate}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        {/* Minor Child/Children Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Minor Child/Children</h2>
          {formData.children.map((child, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Child Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={child.name}
                  onChange={(e) => handleChildChange(index, e)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Child Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={child.dateOfBirth}
                  onChange={(e) => handleChildChange(index, e)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              {index > 0 && (
                <div className="col-span-2">
                  <button
                    type="button"
                    onClick={() => removeChildField(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove Child
                  </button>
                </div>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addChildField}
            className="text-indigo-600 hover:text-indigo-800"
          >
            + Add Another Child
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

export default ThriveDSHSConsentForm;