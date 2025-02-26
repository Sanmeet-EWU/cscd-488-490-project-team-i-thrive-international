import React, { useState } from "react";
import { PageType } from "../App";  // ✅ Corrected import path
import { submitThriveIntakeForm } from "../components/refugeeFormService"; // ✅ Adjusted path

// ✅ Define Props Interface
interface ThriveIntakeFormProps {
  setCurrentPage: (page: PageType) => void;
}

// ✅ Ensure Component Accepts Props
const ThriveIntakeForm: React.FC<ThriveIntakeFormProps> = ({ setCurrentPage }) => {
    const [formData, setFormData] = useState({
        lastName: "",
        firstName: "",
        dob: "",
        email: "",
        phone: "",
        caseWorker: "",
        notes: "",
        immigrationStatus: [] as string[],
        programType: {} as Record<string, boolean>, // Add programType property with type
        eligibilityDate: "", // Add eligibilityDate property
        asylumDateGranted: "", // Add asylumDateGranted property
        alienNumber: "", // Add alienNumber property
        intakeDate: "" // Add intakeDate property
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        // Convert formData to match backend model
        const programTypeString = Object.keys(formData.programType)
            .filter(key => formData.programType[key] === true)
            .join(', ');
    
        const immigrationStatusString = formData.immigrationStatus.join(", ");
    
        const formattedFormData = {
            ...formData,
            programType: programTypeString,
            currentImmigrationStatus: immigrationStatusString,
            intakeDate: new Date(formData.intakeDate).toISOString(),
            dob: new Date(formData.dob).toISOString(),
            eligibilityDate: formData.eligibilityDate ? new Date(formData.eligibilityDate).toISOString() : null,
            asylumDateGranted: formData.asylumDateGranted ? new Date(formData.asylumDateGranted).toISOString() : null,
            caseWorker: "", // Add default value
            submissionDate: new Date().toISOString(), // Add current date
            additionalNotes: "", // Add default value
        };
    
        console.log('Submitting Form Data:', formattedFormData); // Log the updated data
    
        try {
            await submitThriveIntakeForm(formattedFormData);
            alert("Thrive Intake Form submitted successfully!");
        } catch (error) {
            console.error("Submission Error:", error);
            alert("Error submitting form. Please try again.");
        }
    };
    
    
    
    

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Thrive Intake Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required className="border p-2 rounded w-full mb-4"/>
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className="border p-2 rounded w-full mb-4"/>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="border p-2 rounded w-full mb-4"/>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2 rounded w-full mb-4"/>
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="border p-2 rounded w-full mb-4"/>
                <input type="text" name="caseWorker" placeholder="Case Worker Name" value={formData.caseWorker} onChange={handleChange} className="border p-2 rounded w-full mb-4"/>
                <textarea name="notes" placeholder="Additional Notes" value={formData.notes} onChange={handleChange} className="border p-2 rounded w-full mb-4"></textarea>
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 w-full">Submit</button>
            </form>
            <button onClick={() => setCurrentPage("intake")} className="mt-4 text-indigo-600 hover:underline">
                Back to Intake Forms
            </button>
        </div>
    );
};

export default ThriveIntakeForm;
