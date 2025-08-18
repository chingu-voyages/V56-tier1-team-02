import { useState, useEffect} from 'react'
import {usePatients} from "../context/PatientsContext"
import statuses from "../assets/status.json"
import {LuSearch} from "react-icons/lu"

function StatusUpdate() {

  const { patients, setPatients } = usePatients();
  const [patientNumber, setPatientNumber] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (patientNumber.length > 0) {
      const patient = patients.find(
        (p) => p.patientNumber.toUpperCase() === patientNumber.toUpperCase()
      );
      if (!patient) {
        setError("Patient not found. Please check the number and try again.");
        setSelectedPatient(null);
      } else {
        setError("");
        setSelectedPatient(patient);
      }
    } else {
      setSelectedPatient(null);
      setError("");
    }
  }, [patientNumber, patients]);

  const handleStatusChange = (newStatus) => {
    if (!selectedPatient) return;

    const currentIndex = statuses.findIndex(s => s.label === selectedPatient.status);
    const newIndex = statuses.findIndex(s => s.label === newStatus);

    if (Math.abs(newIndex - currentIndex) > 1) {
      alert("You can only move to the previous or next status!");
      return;
    }

    const updatedPatient = { ...selectedPatient, status: newStatus };
    setPatients(
      patients.map(p => p.id === selectedPatient.id ? updatedPatient : p)
    );
    setSelectedPatient(updatedPatient);
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 mt-8">
          <div className="text-center mb-6">
            <h1 className="text-xl font-bold text-[#0069AB] mb-2">Patient Status Update</h1>
            <p className="text-gray-500 text-sm">
              Enter a patient number to view and update their status.
            </p>
          </div>

          <div className="relative">
            <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Enter Patient Number"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              className={`w-full pl-9 pr-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#0069AB]'}`}
            />
          </div>

          {error && <p className="text-red-500 text-xs text-center mt-2">{error}</p>}
        </div>

        {selectedPatient && (
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full mt-6 border border-gray-100 text-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  {selectedPatient.firstName} {selectedPatient.lastName}
                </h2>
                <p className="text-xs text-gray-500">Patient ID: {selectedPatient.patientNumber}</p>
              </div>
            </div>

            <div className="space-y-2 text-gray-600 border-t pt-4">
              <p><strong>Address:</strong> {selectedPatient.streetAddress}</p>
              <p><strong>City:</strong> {selectedPatient.city}</p>
              <p><strong>State:</strong> {selectedPatient.state}</p>
              <p><strong>Country:</strong> {selectedPatient.country}</p>
              <p><strong>Phone:</strong> {selectedPatient.phoneNumber}</p>
              <div className="flex items-center mt-4">
                <p className="font-bold">Status:</p>
                <span
                  className={`ml-2 px-3 py-1 text-xs font-semibold text-white rounded-md ${statuses.find(s => s.label === selectedPatient.status).color}`}>
                  {selectedPatient.status}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <label className="block mb-2 font-medium text-gray-700">Update Status:</label>
              <select
                value={selectedPatient.status}
                onChange={(e) => handleStatusChange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0069AB] transition-all bg-gray-50"
              >
                {statuses.map((status) => {
                  const currentIndex = statuses.findIndex(s => s.label === selectedPatient.status);
                  const newIndex = statuses.findIndex(s => s.label === status.label);
                  const isCurrent = selectedPatient.status === status.label;
                  const isAllowed = Math.abs(newIndex - currentIndex) <= 1;

                  return (
                    <option key={status.id} value={status.label} disabled={!isAllowed && !isCurrent}>
                      {status.label}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StatusUpdate
