import React, { useState, ChangeEvent } from 'react';

interface StudentDetails {
  fullName: string;
  birthDate: string;
  address: string;
  gender: string;
  school: string;
  currentGrade: string;
  languagesSpoken: string;
  countryOfOrigin: string;
}

interface ParentDetails {
  parentName: string;
  languagesSpoken: string;
  phoneNumber: string;
  email: string;
  preferredContactMethod: 'Email' | 'Phone';
}

interface FormData {
  studentDetails: StudentDetails;
  parentDetails: ParentDetails;
  agreementChecked: boolean;
  mediaReleaseChecked: boolean;
}

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    studentDetails: {
      fullName: '',
      birthDate: '',
      address: '',
      gender: '',
      school: '',
      currentGrade: '',
      languagesSpoken: '',
      countryOfOrigin: ''
    },
    parentDetails: {
      parentName: '',
      languagesSpoken: '',
      phoneNumber: '',
      email: '',
      preferredContactMethod: 'Email'
    },
    agreementChecked: false,
    mediaReleaseChecked: false
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    
    if (name.includes('.')) {
      const [section, field] = name.split('.');
      setFormData(prev => {
        const sectionKey = section as keyof FormData;
        const sectionData = prev[sectionKey];
        
        if (sectionData && typeof sectionData === 'object') {
          return {
            ...prev,
            [section]: {
              ...sectionData,
              [field]: type === 'checkbox' ? checked : value
            }
          };
        }
        return prev;
      });
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-right mb-4">Tuesday, January 30, 2024</div>
      <h1 className="text-2xl font-bold text-center mb-8">New Student Registration Form</h1>

      <form className="space-y-8">
        {/* Student Details Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Student Details:</h2>
          <div className="space-y-4">
            {Object.entries(formData.studentDetails).map(([key, value]) => (
              <div key={key} className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  {key.split(/(?=[A-Z])/).join(' ')}
                </label>
                <input
                  type={key === 'birthDate' ? 'date' : 'text'}
                  name={`studentDetails.${key}`}
                  value={value}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Parent Details Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Parent Details:</h2>
          <div className="space-y-4">
            {Object.entries(formData.parentDetails).map(([key, value]) => (
              <div key={key} className="mb-4">
                {key === 'preferredContactMethod' ? (
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Preferred Contact Method
                    </label>
                    <select
                      name={`parentDetails.${key}`}
                      value={value}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    >
                      <option value="Email">Email</option>
                      <option value="Phone">Phone</option>
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {key.split(/(?=[A-Z])/).join(' ')}
                    </label>
                    <input
                      type={key.includes('email') ? 'email' : 'text'}
                      name={`parentDetails.${key}`}
                      value={value}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Liability Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Liability:</h2>
          <div className="space-y-4">
            <p className="text-sm">
              I understand that Thrive International does not provide medical insurance for my child for the purposes of this programming, and I am solely responsible for providing such insurance and for payment of any medical treatment expenses for my child that are not covered by insurance.
            </p>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="agreementChecked"
                checked={formData.agreementChecked}
                onChange={handleChange}
                className="rounded"
              />
              <span className="text-sm">I have read the foregoing information, verifying its accuracy, and agree to the statements made above</span>
            </label>
          </div>
        </section>

        {/* Media Release Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Media Release</h2>
          <div className="space-y-4">
            <p className="text-sm">
              By signing this form, I authorize Thrive International to use photos, videos, and other media containing my child for promotional and educational purposes.
            </p>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="mediaReleaseChecked"
                checked={formData.mediaReleaseChecked}
                onChange={handleChange}
                className="rounded"
              />
              <span className="text-sm">I agree to the media release terms</span>
            </label>
          </div>
        </section>

        <div className="mt-6">
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;