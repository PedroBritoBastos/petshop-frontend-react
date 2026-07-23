import type { PetshopService } from "../../../petshopService/types/PetshopService"
import { ServicesTableRow } from "./ServicesTableRow";

import { usePetshopServiceService } from "../../../../hooks/usePetshopServiceService"
import { useState, useEffect, useMemo } from "react"

export function ServicesTable() {
  const petshopServiceService = usePetshopServiceService();

  const [petshopServices, setPetshopServices] = useState<PetshopService[]>([]);

  // busca todos os pets
  useEffect(() => {
    async function load() {
      const petshopServicesResponse = await petshopServiceService.getClientPetshopServices();
      setPetshopServices(petshopServicesResponse);
    }

    load();
  }, [])

  // memoizando as linhas da tabela para evitar re-renderização se a prop petshopServices não mudar
  const renderedRows = useMemo(() => {
    return petshopServices.map((service) => (
      <ServicesTableRow
        key={service.id}
        service={service}
      />
    ));
  }, [petshopServices]);

  return (
    <div
      className="bg-white border border-border shadow-sm rounded-2xl overflow-hidden flex flex-col h-full"
    >
      <div className="p-5 border-b border-border flex items-center justify-between">
        <p className="text-lg font-semibold text-foreground">Serviços</p>
      </div>

      <div className="flex-1 min-h-0 overflow-auto">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-white z-10">
            <tr className="border-b border-border bg-primary/5">
              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Serviço</th>

              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Cliente</th>

              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Pet</th>

              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Solicitado</th>

              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Execução</th>
            </tr>
          </thead>

          <tbody>
            {renderedRows}
          </tbody>
        </table>
      </div>
    </div>
  )
}