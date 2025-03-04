import API_BASE_URL from "../config";

export const submitForm = async (endpoint: string, data: any) => {
    const response = await fetch(`${API_BASE_URL}/ThriveIntake/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData: data }), // ✅ Wrap in formData object
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to submit form: ${JSON.stringify(errorData)}`);
    }

    return response.json();
};





// ✅ Fetch all refugees
export const fetchRefugees = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/Refugees`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch refugees: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error("Error fetching refugees:", error);
        throw error;
    }
};

// ✅ Fetch a single refugee by Last Name and Date of Birth
export const fetchRefugeeByIdentity = async (lastName: string, dob: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/Refugees?lastName=${lastName}&dob=${dob}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch refugee: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error("Error fetching refugee:", error);
        throw error;
    }
};

// ✅ Fetch all intake form submissions
export const fetchAllIntakeForms = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/ThriveIntake`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch intake forms: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error("Error fetching intake forms:", error);
        throw error;
    }
};
