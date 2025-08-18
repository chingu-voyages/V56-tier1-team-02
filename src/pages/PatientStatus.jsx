import React , {useState, useEffect} from "react";
import { usePatients } from "../context/PatientsContext";
import { Card } from "../components/Card.jsx";



function PatientStatus() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center max-sm:mt-8">
      <PatientCards />
    </div>  
  )
}

function PatientCards() {
  const { patients } = usePatients();
  const [currentPage, setCurrentPage] = useState(1)
  const patientsPerPage = 6

  if( patients.length == 0) {
    return (
      <div className="border-2 rounded-md border-gray-300 max-w-sm p-6">
        <p className="text-gray-500 text-md">
          No patients have been added yet.<br/>
          Once a patient is checked in, their status will appear here in real-time
        </p>
      </div>
    )
  }

  const totalPages = Math.ceil(patients.length / patientsPerPage)
  const indexOfLastPatient = currentPage * patientsPerPage
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage
  const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => 
        prevPage === totalPages ? 1 : prevPage + 1
    )
    },20000)
    return () => clearInterval(interval)
  }, [totalPages])

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="my-4">
      <ul className="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-x-4 gap-y-10">
        {currentPatients.map((patient, index) => (
          <Card key={index} patient={patient} i={index} />
        ))}
      </ul>
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button key={number} onClick={() => paginate(number)}
          className={`mx-1 px-3 py-1 rounded-md ${
              currentPage === number ? "bg-[#0069AB] text-white" : "bg-gray-200"
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  )
}




export default PatientStatus
