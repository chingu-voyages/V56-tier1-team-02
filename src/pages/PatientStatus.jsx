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

const statusStyles = {
  "In-Progress": "bg-[var(--color-in-progress)] text-white font-medium",
  "Checked-In": "bg-[var(--color-checked-in)] text-white font-medium",
  Recovery: "bg-[var(--color-recovery)] text-white font-medium",
  Closing: "bg-[var(--color-closing)] text-white font-medium",
  Complete: "bg-[var(--color-complete)] text-white font-medium",
  "Pre-Procedure": "bg-[var(--color-pre-procedure)] text-white font-medium",
};

import React from "react";

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
  return (
    <ul className="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-x-4 gap-y-10">
      {PatientInfo.map((patient, index) => (
        <Card key={index} patient={patient} i={index} />
      ))}
    </ul>
  );
}

function Card({ patient }) {
  const statusClass = statusStyles[patient.status] || "bg-white text-black";
  return (
    <li className="bg-white card rounded-2xl flex justify-center items-center  gap-3 px-[25px] max-sm:px-[20px]">
      <div className="flex flex-col gap-6 text-[14px] max-md:text-[16px] max-sm:text-[12px] font-semibold text-[var(--color-main)]">
        <h4>Patient Number:</h4>
        <h4>Status:</h4>
      </div>
      <div className="flex flex-col gap-[1.1rem] text-[14px] max-md:text-[16px] max-sm:text-[12px] font-semibold text-[var(--color-main)]">
        <p>{patient.patientNumber}</p>
        <p className={`px-2 py-1  rounded ${statusClass}`}>{patient.status}</p>
      </div>
    </li>
  );
}

export default PatientStatus;
