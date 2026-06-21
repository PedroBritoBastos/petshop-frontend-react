import { ClientsTable } from "./ClientsTable"

export function ClientsView() {
  return (
    <div className="w-full h-screen p-5 md:p-10 bg-primary/10">
      <ClientsTable />
    </div>
  )
}