import React, { useState } from "react";
import { usePatients } from "../context/PatientsContext";
import { Card } from "../components/Card";

const PatientInfo = () => {
  const [hidePatientBtn, setHidePatientBtn] = useState(true);
  const [showAddPatient, setShowAddPatient] = useState(false);
  const [showSearchPatient, setShowSearchPatient] = useState(false);

  const { patients, setPatients } = usePatients([]);

  const handleNewPatients = (patient) => {
    const newPatients = [...patients, patient];
    setPatients(newPatients);
    localStorage.setItem("patients", JSON.stringify(newPatients));

    setShowAddPatient(!showAddPatient);
    setHidePatientBtn(!hidePatientBtn);
  };

  // Function Open Add Patient Form
  const handleShowAddPatient = () => {
    setShowAddPatient(!showAddPatient);

    setHidePatientBtn(!hidePatientBtn);
  };

  // Function Hide Add Patient Form
  const handleHideAddPatient = () => {
    setShowAddPatient(!showAddPatient);

    setHidePatientBtn(true);
  };

  // Function to Show Search Patient Form
  const handleShowSearchPatient = () => {
    setShowSearchPatient(!showSearchPatient);

    setHidePatientBtn(!hidePatientBtn);
  };

  // Function to Hide Search Patient Form
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
          <PatientInfoAddForm
            onHideAddPatient={handleHideAddPatient}
            onNewPatient={handleNewPatients}
          />
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

const PatientInfoAddForm = ({ onHideAddPatient, onNewPatient }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const generatePatientId = () => {
    const letters = "CF";
    const numbers = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");
    return letters + numbers; // Returns: CF8902, CF1234, etc.
  };

  console.log(generatePatientId);

  const handleNewPatient = (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !address ||
      !state ||
      !city ||
      !country ||
      !number ||
      !email
    )
      return;

    const newPatient = {
      firstName,
      lastName,
      address,
      state,
      city,
      country,
      number,
      email,
      status: "In-Progress",
      id: generatePatientId(),
    };

    onNewPatient(newPatient);

    setFirstName("");
    setLastName("");
    setAddress("");
    setState("");
    setCity("");
    setCountry("");
    setNumber("");
    setEmail("");
  };

  return (
    <form
      className="bg-white w-[500px] max-sm:w-[290px] px-6 py-4 m-auto flex flex-col items-center max-sm:items-stretch gap-6 add-patient-form"
      onSubmit={handleNewPatient}
    >
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
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
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
              value={state}
              onChange={(e) => setState(e.target.value)}
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
              value={city}
              onChange={(e) => setCity(e.target.value)}
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
              value={country}
              onChange={(e) => setCountry(e.target.value)}
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
              value={number}
              onChange={(e) => setNumber(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
  const [search, setSearch] = useState("");
  const [singlePatient, setSinglePatient] = useState(null);
  const { patients } = usePatients();

  const [error, setError] = useState(false);

  const handleSearh = (e) => {
    e.preventDefault();

    const searchedPatient = patients.find(
      (patient) =>
        patient.id === search ||
        patient.firstName.toLowerCase() === search.toLowerCase() ||
        patient.lastName.toLowerCase() === search ||
        patient.number === search
    );

    if (!searchedPatient) {
      setError(true);
      return;
    }

    setError(false);

    setSinglePatient(searchedPatient);
    setSearch("");
  };
  return (
    <>
      {!singlePatient && (
        <form className="bg-white w-[500px] max-sm:w-[290px] px-6 py-4 m-auto flex flex-col items-center max-sm:items-stretch gap-6 add-patient-form">
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-1 search-input">
              <label className="text-[var(--color-main)] font-medium text-[12px]">
                Search Patient By ID, First Name, Last Name, Phone Number
              </label>

              <input
                id="id"
                type="text"
                className={`px-3 text-[14px] font-semibold search-patient ${
                  error ? "error-msg" : ""
                }`}
                placeholder="ID or Name or Number"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {error && (
              <span className="text-red-600 font-bold text-xs">
                No patient record found
              </span>
            )}
          </div>

          <div className="flex justify-center items-center gap-8">
            <button
              onClick={handleSearh}
              className="py-[5px] px-[10px] text-[14px] font-semibold bg-[var(--color-main)] text-white  rounded-[6px] cursor-pointer"
            >
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
      )}

      {singlePatient && (
        <>
          <div className="flex flex-col items-center justify-center gap-8">
            <Card patient={singlePatient} />
            <button
              className="cursor-pointer bg-[var(--color-main)] font-semibold text-[14px] text-white p-2 rounded-[8px]"
              onClick={() => setSinglePatient(null)}
            >
              Search Again
            </button>
          </div>
        </>
      )}
    </>
  );
};

const Button = ({ children, secondary, onClick, ...props }) => {
  const btnClass = secondary
    ? "patient-btn patient-btn--secondary"
    : "patient-btn";
  return (
    <button
      className={`text-[14px] cursor-pointer font-semibold ${btnClass}`}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PatientInfo;
