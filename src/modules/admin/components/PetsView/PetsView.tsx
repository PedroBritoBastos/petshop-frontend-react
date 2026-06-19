import { PetsTable } from "./PetsTable"

export function PetsView() {
  return (
    <div className="w-full h-screen p-5 md:p-10 bg-primary/10">
      <PetsTable />
    </div>
  )
}