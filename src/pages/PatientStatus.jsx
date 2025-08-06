import React from 'react'

function PatientStatus() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Patient Status</h2>
      <button
          onClick={() => {
            localStorage.removeItem("role");
            window.location.href = "/";
          }}
          className="ml-4 px-4 py-2 text-black "
>
        ← Back Home
      </button>
    </div>

  )
}

export default PatientStatus