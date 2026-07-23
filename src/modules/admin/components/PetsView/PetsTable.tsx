import { PetsTableRow } from "./PetsTableRow"
import { usePetService } from "../../../../hooks/usePetService"
import { useState, useEffect } from "react"
import type { Pet } from "../../../../types/Pet";

export function PetsTable() {
  const petService = usePetService();

  const [pets, setPets] = useState<Pet[]>([]);

  // busca todos os pets
  useEffect(() => {
    async function load() {
      const petsResponse = await petService.getAllPets();
      setPets(petsResponse);
    }

    load();
  }, [])

  return (
    <div
      className="bg-white border border-border shadow-sm rounded-2xl overflow-hidden flex flex-col h-full"
    >
      <div className="p-5 border-b border-border flex items-center justify-between">
        <p className="text-lg font-semibold text-foreground">Pets</p>
      </div>

      <div className="flex-1 min-h-0 overflow-auto">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-white z-10">
            <tr className="border-b border-border bg-primary/5">
              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Pet</th>

              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Dono</th>

              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Peso</th>

              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Idade</th>
            </tr>
          </thead>

          <tbody>
            {pets.map((pet) => (
              <PetsTableRow
                key={pet.id}
                pet={pet}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}