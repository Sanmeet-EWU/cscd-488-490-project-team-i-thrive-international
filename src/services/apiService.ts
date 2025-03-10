import axios from 'axios';

const API_BASE_URL = 'http://localhost:5085/api';

export const submitForm = async (formType: string, data: any) => {
  try {
    // Step 1: Create the Refugee
    const refugeeData = {
      firstName: data.firstName,
      lastName: data.lastName,
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      countryOfOrigin: data.countryOfOrigin,
      phoneNumber: data.phoneNumber,
      emailAddress: data.emailAddress,
      address: data.address
    };

    const refugeeResponse = await axios.post(`${API_BASE_URL}/refugees`, refugeeData);
    const refugeeId = refugeeResponse.data.refugeeId;

    // Step 2: Create the IntakeForm
    const intakeFormData = {
      refugeeId: refugeeId,
      formType: "ThriveIntake",
      intakeDate: data.intakeDate,
      navigatorName: data.navigatorName,
      programTypeJson: JSON.stringify(data.programType), // Matches jsonb field
      asylumDateGranted: data.asylumDateGranted,
      alienNumber: data.alienNumber,
      eligibilityDate: data.eligibilityDate,
      programEligibilityJson: JSON.stringify(data.programEligibility), // Matches jsonb field
      servicesNeeded: data.servicesNeeded
    };

    const intakeResponse = await axios.post(`${API_BASE_URL}/intakeforms`, intakeFormData);
    return intakeResponse.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error; // Re-throw to handle in the component
  }
};