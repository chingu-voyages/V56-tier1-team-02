import React, { useState } from "react"
import { usePatients } from "../context/PatientsContext"
import statuses from "../assets/status.json"

function PatientInfo() {
  const { patients, setPatients } = usePatients();
  const defaultStatus = statuses.find(s => s.id === 'checked-in');

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    country: "",
    phoneNumber: "",
    contactEmail: "",
    status: defaultStatus.label
  });
  const [editingId, setEditingId] = useState(null);
  const [errors, setErrors] = useState({});

  const generatePatientNumber = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const validate = () => {
    let tempErrors = {};
    if (!form.firstName) tempErrors.firstName = "First name is required.";
    if (!form.lastName) tempErrors.lastName = "Last name is required.";
    if (!form.streetAddress) tempErrors.streetAddress = "Street address is required.";
    if (!form.city) tempErrors.city = "City is required.";
    if (!form.state) tempErrors.state = "State is required.";
    if (!form.country) tempErrors.country = "Country is required.";
    if (!form.phoneNumber) {
      tempErrors.phoneNumber = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(form.phoneNumber)) {
      tempErrors.phoneNumber = "Phone number is not valid.";
    }
    if (!form.contactEmail) {
      tempErrors.contactEmail = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.contactEmail)) {
      tempErrors.contactEmail = "Email address is invalid.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (editingId) {
      setPatients(
        patients.map((p) =>
          p.id === editingId
            ? { ...form, id: editingId, patientNumber: p.patientNumber }
            : p
        )
      );
      setEditingId(null);
    } else {
      const newPatient = {
        ...form,
        id: Date.now(),
        patientNumber: generatePatientNumber()
      };
      setPatients([...patients, newPatient]);
    }

    // Reset form
    setForm({
      firstName: "",
      lastName: "",
      streetAddress: "",
      city: "",
      state: "",
      country: "",
      phoneNumber: "",
      contactEmail: "",
      status: defaultStatus.label
    });
    setErrors({});
  };

  const handleEdit = (patient) => {
    setForm({
      firstName: patient.firstName,
      lastName: patient.lastName,
      streetAddress: patient.streetAddress,
      city: patient.city,
      state: patient.state,
      country: patient.country,
      phoneNumber: patient.phoneNumber,
      contactEmail: patient.contactEmail,
      status: patient.status
    });
    setEditingId(patient.id);
    setErrors({});
  };

  const handleDelete = (id) => {
    setPatients((prev) => prev.filter((p) => p.id !== id));
  };
  return (
    <div className="min-h-screen px-3 lg:px-0">
      <div className="max-w-3xl mx-auto mt-5">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-[#0069AB] mb-3 leading-relaxed">
              Patient Information
            </h1>
            <p className="text-gray-600 text-md mb-4 text-center leading-relaxed">
              {patients.length === 0
                ? "No patients have been added yet. Use the form below to get started"
                : `${patients.length} patient${
                    patients.length !== 1 ? "s" : ""
                  } in the system`}
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  value={form.firstName}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:border-transparent focus:ring-[#0069AB] outline-none transition-all`}
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  value={form.lastName}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:border-transparent focus:ring-[#0069AB] outline-none transition-all`}
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Street Address
              </label>
              <input
                type="text"
                name="streetAddress"
                placeholder="Enter street address"
                value={form.streetAddress}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${errors.streetAddress ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:border-transparent focus:ring-[#0069AB] outline-none transition-all`}
              />
              {errors.streetAddress && <p className="text-red-500 text-xs mt-1">{errors.streetAddress}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  placeholder="Enter state"
                  value={form.state}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:border-transparent focus:ring-[#0069AB] outline-none transition-all`}
                />
                {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  value={form.city}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:border-transparent focus:ring-[#0069AB] outline-none transition-all`}
                />
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  placeholder="Enter country"
                  value={form.country}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:border-transparent focus:ring-[#0069AB] outline-none transition-all`}
                />
                {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:border-transparent focus:ring-[#0069AB] outline-none transition-all`}
                />
                {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Email
              </label>
              <input
                type="email"
                name="contactEmail"
                placeholder="Enter contact email"
                value={form.contactEmail}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${errors.contactEmail ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:border-transparent focus:ring-[#0069AB] outline-none transition-all`}
              />
              {errors.contactEmail && <p className="text-red-500 text-xs mt-1">{errors.contactEmail}</p>}
            </div>

            <button
              type="submit"
              className="bg-[#0069AB] hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md"
            >
              {editingId ? "Update Patient" : "Add Patient"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setForm({
                    firstName: "",
                    lastName: "",
                    streetAddress: "",
                    city: "",
                    state: "",
                    country: "",
                    phoneNumber: "",
                    contactEmail: "",
                    status: defaultStatus.label
                  });
                  setErrors({});
                }}
                className="ml-3 bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-md"
              >
                Cancel
              </button>
            )}
          </form>
        </div>

        {patients.length > 0 && (
          <div className="space-y-3 mb-5">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Patient List
            </h3>
            {patients.map((patient) => (
              <div
                key={patient.id}
                className="bg-white rounded-lg shadow-sm p-4 border border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">
                      {patient.firstName} {patient.lastName}
                    </p>
                    <p className="text-sm text-gray-500">
                      ID: {patient.patientNumber} | Status: {patient.status}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(patient)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(patient.id)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default PatientInfo