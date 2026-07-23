import { SchedulingTableItem } from "./SchedulingTableItem"

import type { PetshopService } from "../../../petshopService/types/PetshopService"
import { formatDate } from "../../../../utils/dateFormatter";

interface Props {
  petshopServices: PetshopService[];
}

export function SchedulingTable({ petshopServices }: Props) {
  return (
    <div className="h-100 flex-1">
      <div className="bg-white border-border shadow-sm rounded-2xl h-full flex flex-col overflow-hidden">
        <p className="text-lg font-semibold text-foreground p-5 border-b border-border shrink-0">
          Agendamentos
        </p>

        <div className="flex-1 min-h-0 overflow-y-auto">
          {petshopServices.map((petshopService) => (
            <SchedulingTableItem
              key={petshopService.id}
              clientName={petshopService.clientId}
              service={petshopService.type}
              date={formatDate(petshopService.executionDate)}
            />
          ))}
        </div>
      </div>
    </div >
  )
}