import { AdoptionsTableItem } from "./AdoptionsTableItem"
import type { Pet } from "../../../../types/Pet"
import { formatDate } from "../../../../utils/dateFormatter";

interface Props {
  adoptedPets: Pet[];
}

export function AdoptionsTable({ adoptedPets }: Props) {
  return (
    <div className="h-100 flex-1">
      <div className="bg-white border-border shadow-sm rounded-2xl h-full flex flex-col overflow-hidden">
        <p className="text-lg font-semibold text-foreground p-5 border-b border-border shrink-0">Adoções</p>

        <div className="flex-1 min-h-0 overflow-y-auto">
          <div className="p-5 flex flex-col gap-4">
            {adoptedPets.map((adoptedPet) => (
              <AdoptionsTableItem
                petName={adoptedPet.name}
                adoptionDate={formatDate(adoptedPet.updatedAt)}
              />
            ))}
          </div>
        </div>
      </div>
    </div >
  )
}