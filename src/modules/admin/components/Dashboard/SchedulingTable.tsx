import { SchedulingTableItem } from "./SchedulingTableItem"

export function SchedulingTable() {
  return (
    <div className="h-100 flex-1">
      <div className="bg-white border-border shadow-sm rounded-2xl h-full flex flex-col overflow-hidden">
        <p className="text-lg font-semibold text-foreground p-5 border-b border-border shrink-0">
          Agendamentos
        </p>

        <div className="flex-1 min-h-0 overflow-y-auto">
          <SchedulingTableItem clientName="client" service="service" date="00-00-0000" />
        </div>
      </div>
    </div >
  )
}