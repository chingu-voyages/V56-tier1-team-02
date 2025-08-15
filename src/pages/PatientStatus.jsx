import React from "react";
import { usePatients } from "../context/PatientsContext";
import { Card } from "../components/Card";

function PatientStatus() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center max-sm:mt-8">
      <PatientCards />
    </div>
  );
}

function PatientCards() {
  const { patients } = usePatients();

  if (patients.length === 0) {
    return (
      <div className="border-2 rounded-md border-gray-300 max-w-sm p-6">
        <p className="text-gray-500 text-md">
          No patients have been added yet. <br />
          Once a patient is checked in, their status will appear here in real-time.
        </p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-x-4 gap-y-10">
      {patients.map((patient, index) => (
        <Card key={index} patient={patient} i={index} />
      ))}
    </ul>
  );
}

export default PatientStatus;
