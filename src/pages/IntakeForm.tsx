import React, { useState } from 'react';

const IntakeForm = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    navigatorName: '',
    intakeDate: '',
    firstName: '',
    lastName: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Community Outreach and Education Intake Form</h1>
      
      <form className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Organization Name
              <input
                type="text"
                name="organizationName"
                className="mt-1 block w-full rounded border-gray-300 shadow-sm p-2"
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Navigator Name
              <input
                type="text"
                name="navigatorName"
                className="mt-1 block w-full rounded border-gray-300 shadow-sm p-2"
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Intake Date
              <input
                type="date"
                name="intakeDate"
                className="mt-1 block w-full rounded border-gray-300 shadow-sm p-2"
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t">
          <h2 className="text-xl font-semibold">Participant Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block text-sm font-medium mb-1">
              First Name
              <input
                type="text"
                name="firstName"
                className="mt-1 block w-full rounded border-gray-300 shadow-sm p-2"
                onChange={handleChange}
              />
            </label>
            
            <label className="block text-sm font-medium mb-1">
              Last Name
              <input
                type="text"
                name="lastName"
                className="mt-1 block w-full rounded border-gray-300 shadow-sm p-2"
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t">
          <h2 className="text-xl font-semibold">Eligibility Verification</h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <span>Receiving resettlement agency services</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <span>16 years or older</span>
            </label>

            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <span>Lives in Washington</span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default IntakeForm;