import React from 'react';

const SoccerCampRegistration: React.FC = () => {
  return (
    <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1>Soccer Camp Registration</h1>
      <form>
        {/* Student Information */}
        <div style={{ fontSize: '1.6em', fontWeight: 'bold', marginTop: '20px' }}>Student Information</div>
        <label htmlFor="participant-name">Participant Name</label>
        <input type="text" id="participant-name" name="participant-name" required style={inputStyle} />

        <label htmlFor="birth-date">Birth Date</label>
        <input type="date" id="birth-date" name="birth-date" required style={inputStyle} />

        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" style={inputStyle}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" required style={inputStyle} />

        <label htmlFor="country-origin">Country of Origin</label>
        <input type="text" id="country-origin" name="country-origin" style={inputStyle} />

        <label htmlFor="languages">What languages do you speak?</label>
        <textarea id="languages" name="languages" style={{ ...inputStyle, height: '100px', resize: 'vertical' }}></textarea>

        <label htmlFor="shirt-size">Shirt Size</label>
        <select id="shirt-size" name="shirt-size" style={inputStyle}>
          <option value="xs">XS</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
        </select>

        {/* Liability */}
        <div style={{ fontSize: '1.6em', fontWeight: 'bold', marginTop: '20px' }}>Liability</div>
        <label htmlFor="guardian-name">Parent/Guardian</label>
        <input type="text" id="guardian-name" name="guardian-name" required style={inputStyle} />

        <label htmlFor="contact-number">Best Contact Number</label>
        <input type="tel" id="contact-number" name="contact-number" required style={inputStyle} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required style={inputStyle} />

        {/* Insurance Liability */}
        <div style={{ fontSize: '1.6em', fontWeight: 'bold', marginTop: '20px' }}>Insurance Liability</div>
        <p>A paragraph with info.</p>
        <div style={signatureLineStyle}></div>

        {/* Waiver and Release of Liability */}
        <div style={{ fontSize: '1.6em', fontWeight: 'bold', marginTop: '20px' }}>Waiver and Release of Liability</div>
        <p>A paragraph with info.</p>
        <div style={signatureLineStyle}></div>

        {/* Media Release */}
        <div style={{ fontSize: '1.6em', fontWeight: 'bold', marginTop: '20px' }}>Media Release</div>
        <p>A paragraph with info.</p>
        <div style={signatureLineStyle}></div>

        <button type="submit" style={buttonStyle}>Submit Registration</button>
      </form>
    </div>
  );
};

// Inline styles
const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px',
  marginTop: '5px',
  marginBottom: '15px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const signatureLineStyle: React.CSSProperties = {
  marginTop: '10px',
  height: '30px',
  borderBottom: '1px solid #000',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#007BFF',
  color: '#fff',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '5px',
  fontSize: '1em',
  cursor: 'pointer',
};

// Export component
export default SoccerCampRegistration;
