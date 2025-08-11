import React from "react";

const statusStyles = {
  "In-Progress": "bg-[var(--color-in-progress)] text-white font-medium",
  "Checked-In": "bg-[var(--color-checked-in)] text-white font-medium",
  Recovery: "bg-[var(--color-recovery)] text-white font-medium",
  Closing: "bg-[var(--color-closing)] text-white font-medium",
  Complete: "bg-[var(--color-complete)] text-white font-medium",
  "Pre-Procedure": "bg-[var(--color-pre-procedure)] text-white font-medium",
};

export function Card({ patient }) {
  const statusClass = statusStyles[patient.status] || "bg-white text-black";
  return (
    <li className="bg-white card rounded-2xl flex justify-center items-center  gap-3 px-[25px] max-sm:px-[20px]">
      <div className="flex flex-col justify-center gap-5">
        <div className="grid items-center grid-cols-2 gap-6 w-full">
          <span className="text-[14px] max-md:text-[16px] max-sm:text-[12px] font-semibold text-[var(--color-main)]">
            Patient ID:
          </span>
          <span className="text-[14px] max-md:text-[16px] max-sm:text-[12px] font-semibold text-[var(--color-main)]">
            {patient.id}
          </span>
        </div>

        <div className="grid grid-cols-2 items-center gap-6 w-full">
          <span className="text-[14px] max-md:text-[16px] max-sm:text-[12px] font-semibold text-[var(--color-main)]">
            Patient Number:
          </span>
          <span className="text-[14px] max-md:text-[16px] max-sm:text-[12px] font-semibold text-[var(--color-main)]">
            {patient.number}
          </span>
        </div>

        <div className="grid grid-cols-2 items-center gap-6 w-full">
          <span className="text-[14px] max-md:text-[16px] max-sm:text-[12px] font-semibold text-[var(--color-main)]">
            Status:
          </span>
          <span>
            <span
              className={`px-2 py-1 text-[14px] max-md:text-[16px] max-sm:text-[12px] font-semibold rounded ${statusClass}`}
            >
              {patient.status}
            </span>
          </span>
        </div>
      </div>
    </li>
  );
}
