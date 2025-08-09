import React from "react";

const PatientInfo = () => {
  return (
    <div className="px-6 py-10">
      <PatientInfoBtn />

      <PatientInfoAddForm />
      <PatientInfoSearchForm />
    </div>
  );
};

const PatientInfoBtn = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button>Add New Patient</Button>

      <Button secondary>Search Existing Patient</Button>
    </div>
  );
};

const PatientInfoAddForm = () => {
  return (
    <form className="bg-white px-6 py-4 flex flex-col gap-6 add-patient-form">
      <h4 className="text-xs text-[var(--color-main)]">
        No patients have been added it yet. Use the form below to get started
      </h4>

      <div className="flex flex-col gap-2.5">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="first-name"
            className="text-[var(--color-main)] text-[12px] font-medium"
          >
            First Name
          </label>
          <input id="first-name" type="text" className="px-3 text-[14px]" />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="last-name"
            className="text-[var(--color-main)] text-[12px] font-medium"
          >
            Last Name
          </label>
          <input id="last-name" type="text" className="px-3 text-[14px]" />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="address"
            className="text-[var(--color-main)] text-[12px] font-medium"
          >
            Street Address
          </label>
          <input id="address" type="text" className="px-3 text-[14px]" />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="state"
            className="text-[var(--color-main)] text-[12px] font-medium"
          >
            State
          </label>
          <input id="state" type="text" className="px-3 text-[14px]" />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="country"
            className="text-[var(--color-main)] text-[12px] font-medium"
          >
            Country
          </label>
          <input id="country" type="text" className="px-3 text-[14px]" />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="number"
            className="text-[var(--color-main)] text-[12px] font-medium"
          >
            Phone Number
          </label>
          <input id="number" type="text" className="px-3 text-[14px]" />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-[var(--color-main)] text-[12px] font-medium"
          >
            Contact Email
          </label>
          <input id="email" type="text" className="px-3 text-[14px]" />
        </div>
      </div>

      <button className="py-[5px] px-[10px] text-[14px] bg-[var(--color-main)] text-white font-semibold rounded-[6px] cursor-pointer">
        Add Patient
      </button>
    </form>
  );
};

const PatientInfoSearchForm = () => {
  return (
    <form className="bg-white px-6 py-4 flex flex-col gap-6 search-patient-form">
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="search"
            className="text-[var(--color-main)] text-[12px] font-medium"
          >
            Search Patient By ID
          </label>
          <input
            id="search"
            type="text"
            className="px-3 text-[14px] search-input font-semibold"
            placeholder="CF8902"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="first-name"
            className="text-[var(--color-main)] text-[12px] font-medium"
          >
            First Name
          </label>
          <input id="first-name" type="text" className="px-3 text-[14px]" />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="last-name"
            className="text-[var(--color-main)] text-[12px] font-medium"
          >
            Last Name
          </label>
          <input id="last-name" type="text" className="px-3 text-[14px]" />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="address"
            className="text-[var(--color-main)] text-[12px] font-medium"
          >
            Street Address
          </label>
          <input id="address" type="text" className="px-3 text-[14px]" />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="state"
            className="text-[var(--color-main)] text-[12px] font-medium"
          >
            State
          </label>
          <input id="state" type="text" className="px-3 text-[14px]" />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="country"
            className="text-[var(--color-main)] text-[12px] font-medium"
          >
            Country
          </label>
          <input id="country" type="text" className="px-3 text-[14px]" />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="number"
            className="text-[var(--color-main)] text-[12px] font-medium"
          >
            Phone Number
          </label>
          <input id="number" type="text" className="px-3 text-[14px]" />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-[var(--color-main)] text-[12px] font-medium"
          >
            Contact Email
          </label>
          <input id="email" type="text" className="px-3 text-[14px]" />
        </div>
      </div>

      <button className="py-[5px] px-[10px] text-[14px] bg-[var(--color-main)] text-white font-semibold rounded-[6px] cursor-pointer">
        Search Patient
      </button>
    </form>
  );
};

const Button = ({ children, secondary, ...props }) => {
  const btnClass = secondary
    ? "patient-btn patient-btn--secondary"
    : "patient-btn";
  return (
    <button className={`text-[14px] ${btnClass}`} {...props}>
      {children}
    </button>
  );
};

export default PatientInfo;
