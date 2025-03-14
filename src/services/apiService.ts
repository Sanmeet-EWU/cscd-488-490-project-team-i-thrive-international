import axios from 'axios';

const API_BASE_URL = 'http://localhost:5085/api';

export const submitForm = async (formType: string, data: any) => {
  try {
    if (formType === "ThriveIntake") {
      const refugeeData = {
        firstName: data.firstName,
        lastName: data.lastName,
        dateOfBirth: data.dateOfBirth, // Expected in "YYYY-MM-DD" format from frontend
        gender: data.gender,
        countryOfOrigin: data.countryOfOrigin,
        phoneNumber: data.phoneNumber,
        emailAddress: data.emailAddress,
        address: data.address,
        familyMembers: data.familyMembers?.map((fm: any) => ({
          firstName: fm.firstName,
          lastName: fm.lastName,
          refugeeId: parseInt(fm.refugeeId), // Convert to int
          relationship: fm.relationship
        })) || []
      };

      const refugeeResponse = await axios.post(`${API_BASE_URL}/refugees`, refugeeData);
      const refugeeId = refugeeResponse.data.refugeeId;

      const intakeFormData = {
        refugeeId: refugeeId,
        formType: "ThriveIntake",
        intakeDate: data.intakeDate,
        navigatorName: data.navigatorName,
        programTypeJson: JSON.stringify(data.programType),
        asylumDateGranted: data.asylumDateGranted,
        alienNumber: data.alienNumber,
        eligibilityDate: data.eligibilityDate,
        programEligibilityJson: JSON.stringify(data.programEligibility),
        servicesNeeded: data.servicesNeeded
      };

      const intakeResponse = await axios.post(`${API_BASE_URL}/intakeforms`, intakeFormData);
      return { refugeeId, intakeData: intakeResponse.data };
    } 
    else if (formType === "NewStudentRegistration") {
      const studentData = {
        refugeeId: data.refugeeId,
        firstName: data.student.firstName,
        lastName: data.student.lastName,
        birthDate: data.student.birthDate ? data.student.birthDate.split('T')[0] : null, // "YYYY-MM-DD"
        address: data.student.address,
        gender: data.student.gender,
        school: data.student.school,
        currentGrade: data.student.currentGrade,
        languagesSpoken: data.student.languagesSpoken,
        countryOfOrigin: data.student.countryOfOrigin,
        parentName: data.parent.parentName,
        parentLanguagesSpoken: data.parent.languagesSpoken,
        parentPhoneNumber: data.parent.parentPhoneNumber,
        parentEmail: data.parent.parentEmail,
        preferredContactMethod: data.parent.preferredContactMethod,
        insuranceLiability: data.liability.insuranceLiability,
        insuranceLiabilitySignature: data.liability.insuranceLiabilitySignature,
        waiverAndRelease: data.liability.waiverAndRelease,
        waiverAndReleaseSignature: data.liability.waiverAndReleaseSignature,
        mediaRelease: data.liability.mediaRelease,
        mediaReleaseSignature: data.liability.mediaReleaseSignature
      };

      console.log("Submitting student data:", JSON.stringify(studentData, null, 2));
      const studentResponse = await axios.post(`${API_BASE_URL}/students`, studentData);
      return studentResponse.data;
    }
    else {
      throw new Error("Unknown form type");
    }
  } catch (error: any) {
    console.error('API Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    throw error;
  }
};

export const fetchRefugeeById = async (refugeeId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/refugees/${refugeeId}`);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching refugee:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    throw error;
  }
};

export const fetchFamilyMembers = async (refugeeId: number, firstName: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/family/${refugeeId}/${firstName}`);
    return response.data; // Now returns { parentName, child }
  } catch (error: any) {
    console.error('Error fetching family members:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    throw error;
  }
};