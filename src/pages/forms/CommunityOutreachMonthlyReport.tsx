import React, { useState } from "react";

const CommunityOutreachReport = () => {
  const [formData, setFormData] = useState({
    contractorName: "",
    reportingMonth: "",
    outreachEvents: [{ date: "", languages: "", materials: "", information: "" }],
    otherOutreachActivity: { hasActivity: false, description: "" },
    informationAndReferrals: [""],
    referralToOwnOrganization: { hasReferral: false, ensuredNotCounted: false },
    workshops: [{ topic: "", information: "", languages: "" }], // New field for workshops
    staffingChange: { hasChange: false, description: "" }, // New field for staffing changes
    successStory: "", // New field for success story
    challenge: "", // New field for challenges
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleOutreachEventChange = (index: number, field: keyof typeof formData.outreachEvents[0], value: string) => {
    const updatedOutreachEvents = [...formData.outreachEvents];
    updatedOutreachEvents[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      outreachEvents: updatedOutreachEvents,
    }));
  };

  const addOutreachEvent = () => {
    setFormData((prev) => ({
      ...prev,
      outreachEvents: [
        ...prev.outreachEvents,
        { date: "", languages: "", materials: "", information: "" },
      ],
    }));
  };

  const handleInformationAndReferralsChange = (index: number, value: string) => {
    const updatedInformationAndReferrals = [...formData.informationAndReferrals];
    updatedInformationAndReferrals[index] = value;
    setFormData((prev) => ({
      ...prev,
      informationAndReferrals: updatedInformationAndReferrals,
    }));
  };

  const addInformationAndReferral = () => {
    setFormData((prev) => ({
      ...prev,
      informationAndReferrals: [...prev.informationAndReferrals, ""],
    }));
  };

  const handleWorkshopChange = (index: number, field: keyof typeof formData.workshops[0], value: string) => {
    const updatedWorkshops = [...formData.workshops];
    updatedWorkshops[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      workshops: updatedWorkshops,
    }));
  };

  const addWorkshop = () => {
    setFormData((prev) => ({
      ...prev,
      workshops: [...prev.workshops, { topic: "", information: "", languages: "" }],
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Community Outreach and Education Monthly Narrative Report
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Contractor Name and Reporting Month */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contractor Name
            </label>
            <input
              type="text"
              name="contractorName"
              value={formData.contractorName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reporting Month (Month, Year)
            </label>
            <input
              type="text"
              name="reportingMonth"
              value={formData.reportingMonth}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="e.g., January 2023"
              required
            />
          </div>
        </div>

        {/* Outreach Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Outreach</h2>
          <p className="text-sm text-gray-600">
            Please use the table below to describe outreach events this month.
          </p>

          {/* Outreach Events Table */}
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-300">Date of Event</th>
                <th className="px-4 py-2 border border-gray-300">Targeted Languages</th>
                <th className="px-4 py-2 border border-gray-300">Outreach Material</th>
                <th className="px-4 py-2 border border-gray-300">
                  Bullet Point of Information Provided
                </th>
              </tr>
            </thead>
            <tbody>
              {formData.outreachEvents.map((event, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border border-gray-300">
                    <input
                      type="date"
                      value={event.date}
                      onChange={(e) =>
                        handleOutreachEventChange(index, "date", e.target.value)
                      }
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <input
                      type="text"
                      value={event.languages}
                      onChange={(e) =>
                        handleOutreachEventChange(index, "languages", e.target.value)
                      }
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <input
                      type="text"
                      value={event.materials}
                      onChange={(e) =>
                        handleOutreachEventChange(index, "materials", e.target.value)
                      }
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <input
                      type="text"
                      value={event.information}
                      onChange={(e) =>
                        handleOutreachEventChange(index, "information", e.target.value)
                      }
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Add Outreach Event Button */}
          <button
            type="button"
            onClick={addOutreachEvent}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Add Outreach Event
          </button>

          {/* Other Outreach Activity */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Did you have any other outreach activity during this reporting period?
            </label>
            <div className="flex items-center mt-2">
              <label className="flex items-center mr-4">
                <input
                  type="checkbox"
                  name="hasActivity"
                  checked={formData.otherOutreachActivity.hasActivity}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      otherOutreachActivity: {
                        ...prev.otherOutreachActivity,
                        hasActivity: e.target.checked,
                      },
                    }))
                  }
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="hasActivity"
                  checked={!formData.otherOutreachActivity.hasActivity}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      otherOutreachActivity: {
                        ...prev.otherOutreachActivity,
                        hasActivity: !e.target.checked,
                      },
                    }))
                  }
                  className="mr-2"
                />
                No
              </label>
            </div>
            {formData.otherOutreachActivity.hasActivity && (
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700">
                  Describe the activity:
                </label>
                <textarea
                  name="description"
                  value={formData.otherOutreachActivity.description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      otherOutreachActivity: {
                        ...prev.otherOutreachActivity,
                        description: e.target.value,
                      },
                    }))
                  }
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  rows={3}
                />
              </div>
            )}
          </div>
        </div>

        {/* Information and Referrals Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Information and Referrals</h2>
          <p className="text-sm text-gray-600">
            Please list the type of Information and Referral Services you provided to
            participants this month.
          </p>

          {/* Information and Referrals Table */}
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-300">
                  Information and Referrals
                </th>
              </tr>
            </thead>
            <tbody>
              {formData.informationAndReferrals.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border border-gray-300">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) =>
                        handleInformationAndReferralsChange(index, e.target.value)
                      }
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Add Information and Referral Button */}
          <button
            type="button"
            onClick={addInformationAndReferral}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Add Information and Referral
          </button>

          {/* Referral to Own Organization */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Does any of the above-listed Information and Referrals have been made to
              your own organization or subcontractors' programs?
            </label>
            <div className="flex items-center mt-2">
              <label className="flex items-center mr-4">
                <input
                  type="checkbox"
                  name="hasReferral"
                  checked={formData.referralToOwnOrganization.hasReferral}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      referralToOwnOrganization: {
                        ...prev.referralToOwnOrganization,
                        hasReferral: e.target.checked,
                      },
                    }))
                  }
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="hasReferral"
                  checked={!formData.referralToOwnOrganization.hasReferral}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      referralToOwnOrganization: {
                        ...prev.referralToOwnOrganization,
                        hasReferral: !e.target.checked,
                      },
                    }))
                  }
                  className="mr-2"
                />
                No
              </label>
            </div>
            {formData.referralToOwnOrganization.hasReferral && (
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700">
                  If yes, did you ensure it won't be counted as a performance outcome and
                  won't be included in your quarterly report and deliverables?
                </label>
                <div className="flex items-center mt-2">
                  <label className="flex items-center mr-4">
                    <input
                      type="checkbox"
                      name="ensuredNotCounted"
                      checked={formData.referralToOwnOrganization.ensuredNotCounted}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          referralToOwnOrganization: {
                            ...prev.referralToOwnOrganization,
                            ensuredNotCounted: e.target.checked,
                          },
                        }))
                      }
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="ensuredNotCounted"
                      checked={!formData.referralToOwnOrganization.ensuredNotCounted}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          referralToOwnOrganization: {
                            ...prev.referralToOwnOrganization,
                            ensuredNotCounted: !e.target.checked,
                          },
                        }))
                      }
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Community and Cultural Orientation and Educational Workshops Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Community and Cultural Orientation and Educational Workshops</h2>
          <p className="text-sm text-gray-600">
            Please use the table below to describe workshops provided this month.
          </p>

          {/* Workshops Table */}
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-300">Topic/Title</th>
                <th className="px-4 py-2 border border-gray-300">Bullet Point of Information Provided</th>
                <th className="px-4 py-2 border border-gray-300">Targeted Languages</th>
              </tr>
            </thead>
            <tbody>
              {formData.workshops.map((workshop, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border border-gray-300">
                    <input
                      type="text"
                      value={workshop.topic}
                      onChange={(e) =>
                        handleWorkshopChange(index, "topic", e.target.value)
                      }
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <input
                      type="text"
                      value={workshop.information}
                      onChange={(e) =>
                        handleWorkshopChange(index, "information", e.target.value)
                      }
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <input
                      type="text"
                      value={workshop.languages}
                      onChange={(e) =>
                        handleWorkshopChange(index, "languages", e.target.value)
                      }
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Add Workshop Button */}
          <button
            type="button"
            onClick={addWorkshop}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Add Workshop
          </button>
        </div>

        {/* Administration Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Administration</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Did you have any staffing change?
            </label>
            <div className="flex items-center mt-2">
              <label className="flex items-center mr-4">
                <input
                  type="checkbox"
                  name="hasChange"
                  checked={formData.staffingChange.hasChange}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      staffingChange: {
                        ...prev.staffingChange,
                        hasChange: e.target.checked,
                      },
                    }))
                  }
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="hasChange"
                  checked={!formData.staffingChange.hasChange}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      staffingChange: {
                        ...prev.staffingChange,
                        hasChange: !e.target.checked,
                      },
                    }))
                  }
                  className="mr-2"
                />
                No
              </label>
            </div>
            {formData.staffingChange.hasChange && (
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700">
                  Please describe the change:
                </label>
                <textarea
                  name="description"
                  value={formData.staffingChange.description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      staffingChange: {
                        ...prev.staffingChange,
                        description: e.target.value,
                      },
                    }))
                  }
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  rows={3}
                />
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Is there any training or support you need from ORIA?
            </label>
            <textarea
              name="trainingNeeds"
              value={formData.staffingChange.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  staffingChange: {
                    ...prev.staffingChange,
                    description: e.target.value,
                  },
                }))
              }
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              rows={3}
            />
          </div>
        </div>

        {/* Success Story Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Success Story</h2>
          <label className="block text-sm font-medium text-gray-700">
            During this month did you have any success story that you want to share?
          </label>
          <textarea
            name="successStory"
            value={formData.successStory}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                successStory: e.target.value,
              }))
            }
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows={3}
          />
        </div>

        {/* Challenge Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Challenge</h2>
          <label className="block text-sm font-medium text-gray-700">
            During this month did you face any challenges that you want to share?
          </label>
          <textarea
            name="challenge"
            value={formData.challenge}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                challenge: e.target.value,
              }))
            }
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows={3}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Note at the end of the form */}
      <p className="mt-6 text-sm text-gray-600">
        (Note: DSHS may request additional information to be reported)
      </p>
    </div>
  );
};

export default CommunityOutreachReport;