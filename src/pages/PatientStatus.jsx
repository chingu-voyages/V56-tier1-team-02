const PatientInfo = [
  {
    patientNumber: "A4B7Q9",
    status: "In-Progress",
  },

  {
    patientNumber: "A4B7Q9",
    status: "Checked-In",
  },

  {
    patientNumber: "A4B7Q9",
    status: "Recovery",
  },

  {
    patientNumber: "A4B7Q9",
    status: "Closing",
  },

  {
    patientNumber: "A4B7Q9",
    status: "Complete",
  },

  {
    patientNumber: "A4B7Q9",
    status: "Pre-Procedure",
  },
];

import React from "react";
import { usePatients } from "../context/PatientsContext";
import { Card } from "../components/Card";

function PatientStatus() {
  return (
    <div className="flex flex-col items-center justify-center mt-12 max-sm:mt-8">
      <PatientCards />
      <button
        onClick={() => {
          localStorage.removeItem("role");
          window.location.href = "/";
        }}
        className="ml-4 mt-10 px-4 py-2 text-black "
      >
        ← Back Home
      </button>
    </div>
  );
}

function PatientCards() {
  const { patients } = usePatients();

  console.log(patients);

  return (
    <ul className="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-x-4 gap-y-10">
      {patients.map((patient, index) => (
        <Card key={index} patient={patient} i={index} />
      ))}
    </ul>
  );
}

export default PatientStatus;
