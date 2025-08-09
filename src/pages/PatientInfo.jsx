import React, { useState } from "react";

const PatientInfo = () => {
  const [hidePatientBtn, setHidePatientBtn] = useState(true);
  const [showAddPatient, setShowAddPatient] = useState(false);
  const [showSearchPatient, setShowSearchPatient] = useState(false);

  // Function Open Add Patient Form
  const handleShowAddPatient = () => {
    setShowAddPatient(!showAddPatient);

    setHidePatientBtn(!hidePatientBtn);
  };

  const handleHideAddPatient = () => {
    setShowAddPatient(!showAddPatient);

    setHidePatientBtn(true);
  };

  // Function to Show Search Patient Form
  const handleShowSearchPatient = () => {
    setShowSearchPatient(!showSearchPatient);

    setHidePatientBtn(!hidePatientBtn);
  };

  const handleHideSearchPatient = () => {
    setShowSearchPatient(!showSearchPatient);

    setHidePatientBtn(!hidePatientBtn);
  };

  return (
    <div className="px-6 py-10 flex flex-col justify-center patient-info">
      {hidePatientBtn && (
        <PatientInfoBtn
          onShowAddPatient={handleShowAddPatient}
          onShowSearchPatient={handleShowSearchPatient}
        />
      )}

      <div>
        {showAddPatient && (
          <PatientInfoAddForm onHideAddPatient={handleHideAddPatient} />
        )}
        {showSearchPatient && (
          <PatientInfoSearchForm
            onHideSearchPatient={handleHideSearchPatient}
          />
        )}
      </div>
    </div>
  );
};

const PatientInfoBtn = ({ onShowAddPatient, onShowSearchPatient }) => {
  return (
    <div className="flex items-center max-sm:flex-col justify-center gap-4">
      <Button onClick={onShowAddPatient}>Add New Patient</Button>

      <Button secondary onClick={onShowSearchPatient}>
        Search Existing Patient
      </Button>
    </div>
  );
};

const PatientInfoAddForm = ({ onHideAddPatient }) => {
  return (
    <form className="bg-white w-[500px] max-sm:w-[290px] px-6 py-4 m-auto flex flex-col items-center max-sm:items-stretch gap-6 add-patient-form">
      <h4 className="text-[14px] text-[var(--color-main)] font-medium">
        No patients have been added it yet. Use the form below to get started
      </h4>

      <div className="flex flex-col gap-2.5">
        <div className="grid grid-cols-2 gap-x-6 max-sm:grid-cols-1">
          <div className="flex flex-col gap-1 add-input">
            <label
              htmlFor="first-name"
              className="text-[var(--color-main)] text-[12px] font-medium"
            >
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              className="px-3 text-[14px] font-semibold"
            />
          </div>

          <div className="flex flex-col gap-1 add-input">
            <label
              htmlFor="last-name"
              className="text-[var(--color-main)] text-[12px] font-medium"
            >
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              className="px-3 text-[14px] font-semibold"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 add-input">
          <label
            htmlFor="address"
            className="text-[var(--color-main)] text-[12px] font-medium"
          >
            Street Address
          </label>
          <input
            id="address"
            type="text"
            className="px-3 text-[14px] font-semibold"
          />
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 max-sm:grid-cols-1">
          <div className="flex flex-col gap-1 add-input">
            <label
              htmlFor="state"
              className="text-[var(--color-main)] text-[12px] font-medium"
            >
              State
            </label>
            <input
              id="state"
              type="text"
              className="px-3 text-[14px] font-semibold"
            />
          </div>

          <div className="flex flex-col gap-1 add-input">
            <label
              htmlFor="city"
              className="text-[var(--color-main)] text-[12px] font-medium"
            >
              City
            </label>
            <input
              id="city"
              type="text"
              className="px-3 text-[14px] font-semibold"
            />
          </div>

          <div className="flex flex-col gap-1 add-input">
            <label
              htmlFor="country"
              className="text-[var(--color-main)] text-[12px] font-medium"
            >
              Country
            </label>
            <input
              id="country"
              type="text"
              className="px-3 text-[14px] font-semibold"
            />
          </div>

          <div className="flex flex-col gap-1 add-input">
            <label
              htmlFor="number"
              className="text-[var(--color-main)] text-[12px] font-medium"
            >
              Phone Number
            </label>
            <input
              id="number"
              type="text"
              className="px-3 text-[14px] font-semibold"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 add-input">
          <label
            htmlFor="email"
            className="text-[var(--color-main)] text-[12px] font-medium"
          >
            Contact Email
          </label>
          <input
            id="email"
            type="text"
            className="px-3 text-[14px] font-semibold"
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-8">
        <button className="py-[5px] px-[10px] text-[14px] font-semibold bg-[var(--color-main)] text-white  rounded-[6px] cursor-pointer">
          Add Patient
        </button>

        <button
          className="py-[5px] px-[10px] text-[14px] font-semibold bg-[#d9d9d9] text-white  rounded-[6px] cursor-pointer"
          onClick={onHideAddPatient}
        >
          Close
        </button>
      </div>
    </form>
  );
};

const PatientInfoSearchForm = ({ onHideSearchPatient }) => {
  return (
    <form className="bg-white w-[500px] max-sm:w-[290px] px-6 py-4 m-auto flex flex-col items-center max-sm:items-stretch gap-6 add-patient-form">
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-col gap-1 search-input">
          <label className="text-[var(--color-main)] font-medium text-[12px]">
            Search Patient By ID
          </label>

          <input
            id="first-name"
            type="text"
            className="px-3 text-[14px] font-semibold search-patient"
            placeholder="CF8902"
          />
        </div>

        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-x-6">
          <div className="flex flex-col gap-1 search-input">
            <label
              htmlFor="first-name"
              className="text-[var(--color-main)] text-[12px] font-medium"
            >
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              className="px-3 text-[14px] font-semibold"
            />
          </div>

          <div className="flex flex-col gap-1 search-input">
            <label
              htmlFor="last-name"
              className="text-[var(--color-main)] text-[12px] font-medium"
            >
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              className="px-3 text-[14px] font-semibold"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 search-input">
          <label
            htmlFor="address"
            className="text-[var(--color-main)] text-[12px] font-medium"
          >
            Street Address
          </label>
          <input
            id="address"
            type="text"
            className="px-3 text-[14px] font-semibold"
          />
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 max-sm:grid-cols-1">
          <div className="flex flex-col gap-1 search-input">
            <label
              htmlFor="state"
              className="text-[var(--color-main)] text-[12px] font-medium"
            >
              State
            </label>
            <input
              id="state"
              type="text"
              className="px-3 text-[14px] font-semibold"
            />
          </div>

          <div className="flex flex-col gap-1 search-input">
            <label
              htmlFor="city"
              className="text-[var(--color-main)] text-[12px] font-medium"
            >
              City
            </label>
            <input
              id="city"
              type="text"
              className="px-3 text-[14px] font-semibold"
            />
          </div>

          <div className="flex flex-col gap-1 search-input">
            <label
              htmlFor="country"
              className="text-[var(--color-main)] text-[12px] font-medium"
            >
              Country
            </label>
            <input
              id="country"
              type="text"
              className="px-3 text-[14px] font-semibold"
            />
          </div>

          <div className="flex flex-col gap-1 search-input">
            <label
              htmlFor="number"
              className="text-[var(--color-main)] text-[12px] font-medium"
            >
              Phone Number
            </label>
            <input
              id="number"
              type="text"
              className="px-3 text-[14px] font-semibold"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 search-input">
          <label
            htmlFor="email"
            className="text-[var(--color-main)] text-[12px] font-medium"
          >
            Contact Email
          </label>
          <input
            id="email"
            type="text"
            className="px-3 text-[14px] font-semibold"
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-8">
        <button className="py-[5px] px-[10px] text-[14px] font-semibold bg-[var(--color-main)] text-white  rounded-[6px] cursor-pointer">
          Search Patient
        </button>

        <button
          className="py-[5px] px-[10px] text-[14px] font-semibold bg-[#d9d9d9] text-white  rounded-[6px] cursor-pointer"
          onClick={onHideSearchPatient}
        >
          Close
        </button>
      </div>
    </form>
  );
};

const Button = ({ children, secondary, onClick, ...props }) => {
  const btnClass = secondary
    ? "patient-btn patient-btn--secondary"
    : "patient-btn";
  return (
    <button
      className={`text-[14px] cursor-pointer ${btnClass}`}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PatientInfo;
