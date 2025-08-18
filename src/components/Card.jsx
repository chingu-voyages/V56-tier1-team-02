import statuses from "../assets/status.json"

export function Card({patient}) {

  const statusColor = statuses.find(s => s.label === patient.status).color

  return (
    <li className="bg-white card rounded-2xl flex justify-center items-center  gap-3 px-[25px] max-sm:px-[20px]">
      <div className="flex flex-col justify-center gap-5">
        <div className="grid items-center grid-cols-2 gap-6 w-full">
          <span className="text-sm font-semibold text-[var(--color-main)]">
            Patient Number:
          </span>
          <span className="text-sm font-semibold text-[var(--color-main)]">
            {patient.patientNumber}
          </span>
        </div>

        <div className="grid grid-cols-2 items-center gap-6 w-full">
          <span className="text-sm font-semibold text-[var(--color-main)]">
            Status:
          </span>
          <span>
            <span
              className={`px-2 py-1 text-sm  font-semibold text-white rounded ${statusColor}`}
            >
              {patient.status}
            </span>
          </span>
        </div>
      </div>
    </li>
  )
}


