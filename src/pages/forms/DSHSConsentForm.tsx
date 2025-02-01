import React, { useState, ChangeEvent } from 'react';

interface ClientInfo {
  name: string;
  dateOfBirth: string;
  identificationNumber: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  telephone: string;
  otherInformation: string;
}

interface FormData {
  clientInfo: ClientInfo;
}

const DSHSConsentForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    clientInfo: {
      name: '',
      dateOfBirth: '',
      identificationNumber: '',
      address: '',
      city: '',
      state: 'Washington',
      zipCode: '',
      telephone: '',
      otherInformation: '',
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      clientInfo: {
        ...prev.clientInfo,
        [name]: value,
      },
    }));
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img src="/path-to-dshs-logo.png" alt="DSHS Logo" style={{ height: '60px' }} />
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '20px 0' }}>Consent</h1>
      </div>

      <form style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        {/* Client Identification */}
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '5px', marginBottom: '15px' }}>
            Client Identification
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '15px' }}>
            <input
              type="text"
              name="name"
              value={formData.clientInfo.name}
              onChange={handleChange}
              placeholder="NAME"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
            <input
              type="date"
              name="dateOfBirth"
              value={formData.clientInfo.dateOfBirth}
              onChange={handleChange}
              placeholder="DATE OF BIRTH"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
            <input
              type="text"
              name="identificationNumber"
              value={formData.clientInfo.identificationNumber}
              onChange={handleChange}
              placeholder="IDENTIFICATION NUMBER"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '15px', marginTop: '15px' }}>
            <input
              type="text"
              name="address"
              value={formData.clientInfo.address}
              onChange={handleChange}
              placeholder="ADDRESS"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
            <input
              type="text"
              name="city"
              value={formData.clientInfo.city}
              onChange={handleChange}
              placeholder="CITY"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
            <input
              type="text"
              name="state"
              value={formData.clientInfo.state}
              onChange={handleChange}
              placeholder="STATE"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
            <input
              type="text"
              name="zipCode"
              value={formData.clientInfo.zipCode}
              onChange={handleChange}
              placeholder="ZIP CODE"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>

          <div style={{ marginTop: '15px' }}>
            <input
              type="text"
              name="telephone"
              value={formData.clientInfo.telephone}
              onChange={handleChange}
              placeholder="TELEPHONE NUMBER (INCLUDE AREA CODE)"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>

          <div style={{ marginTop: '15px' }}>
            <textarea
              name="otherInformation"
              value={formData.clientInfo.otherInformation}
              onChange={handleChange}
              placeholder="OTHER INFORMATION"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                height: '100px',
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#0066cc',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            float: 'right',
          }}
        >
          Submit Consent Form
        </button>
      </form>
    </div>
  );
};

export default DSHSConsentForm;
