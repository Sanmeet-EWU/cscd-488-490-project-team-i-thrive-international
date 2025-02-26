const API_URL = "http://localhost:5287/api"; // Ensure this matches your backend URL

// ✅ Submit Thrive Intake Form
export const submitThriveIntakeForm = async (formData: any) => {
    try {
        const response = await fetch(`${API_URL}/ThriveIntakeRegistration`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error(`Server Error: ${response.status}`);

        return await response.json();
    } catch (error) {
        console.error("Error submitting Thrive Intake Form:", error);
        throw error;
    }
};

// ✅ Submit New Student Registration Form
export const submitNewStudentForm = async (formData: any) => {
    try {
        const response = await fetch(`${API_URL}/NewStudentRegistration`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error(`Server Error: ${response.status}`);

        return await response.json();
    } catch (error) {
        console.error("Error submitting New Student Registration Form:", error);
        throw error;
    }
};

// ✅ Submit Community Outreach Form
export const submitCommunityOutreachForm = async (formData: any) => {
    try {
        const response = await fetch(`${API_URL}/CommunityOutreachIntake`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error(`Server Error: ${response.status}`);

        return await response.json();
    } catch (error) {
        console.error("Error submitting Community Outreach Form:", error);
        throw error;
    }
};
