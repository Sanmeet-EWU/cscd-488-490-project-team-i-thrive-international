import React, { useState, ChangeEvent } from 'react';
import { fetchFamilyMembers } from '../services/apiService';

interface FamilyRelationship {
  parentName: string;
  child: {
    id: number;
    firstName: string;
    lastName: string;
    relationship: string;
  };
}

const FamilyTracker: React.FC = () => {
  const [refugeeId, setRefugeeId] = useState<number>(0);
  const [firstName, setFirstName] = useState<string>('');
  const [familyData, setFamilyData] = useState<FamilyRelationship | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (refugeeId < 10000 || refugeeId > 99999 || !firstName) {
      setError("Please enter a valid 5-digit Refugee ID and First Name.");
      return;
    }

    try {
      const data = await fetchFamilyMembers(refugeeId, firstName);
      console.log("Family data:", data);
      setFamilyData(data);
      setError(null);
    } catch (err: any) {
      console.error("Error in handleSearch:", err.response?.data || err.message);
      setError(err.response?.data || "No family relationship found.");
      setFamilyData(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Family Tracker</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Refugee ID</label>
          <input
            type="number"
            value={refugeeId === 0 ? '' : refugeeId}
            onChange={(e) => setRefugeeId(parseInt(e.target.value) || 0)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter 5-digit Refugee ID"
            min="10000"
            max="99999"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter First Name"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
        >
          Search Family
        </button>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="mt-6">
        {familyData ? (
          <p className="text-lg">
            {familyData.parentName} is parent to {familyData.child.firstName} {familyData.child.lastName}
          </p>
        ) : (
          !error && <p className="text-lg">Enter a Refugee ID and First Name to search.</p>
        )}
      </div>
    </div>
  );
};

export default FamilyTracker;