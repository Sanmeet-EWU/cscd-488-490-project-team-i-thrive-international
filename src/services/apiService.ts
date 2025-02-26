const API_BASE_URL = "http://localhost:5287"; // Change to your actual backend URL

// Generic function to send data to backend
export const submitForm = async (endpoint: string, formData: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to submit form");
    }

    return await response.json();
  } catch (error) {
    console.error("❌ API Error:", error);
    throw error;
  }
};
