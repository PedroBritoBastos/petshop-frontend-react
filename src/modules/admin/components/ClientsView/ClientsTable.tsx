import { ClientsTableRow } from "./ClientsTableRow"

import type { Client } from "../../../client/types/Client"
import { useClientService } from "../../../client/hooks/clientService/useClientService"
import { useState, useEffect, useMemo } from "react"

export function ClientsTable() {
  const clientService = useClientService();

  const [clients, setClients] = useState<Client[]>([]);

  // busca os clientes
  useEffect(() => {
    async function load() {
      const clientsResponse = await clientService.getAllClients();
      setClients(clientsResponse);
    }

    load();
  }, [])

  // memoizando as linhas da tabela para evitar re-renderização se a prop clients não alterar
  const renderedRows = useMemo(() => {
    return clients.map((client) => (
      <ClientsTableRow
        key={client.id}
        client={client}
      />
    ));
  }, [clients]);

  return (
    <div className="bg-white border border-border shadow-sm rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="p-5 border-b border-border flex items-center justify-between">
        <p className="text-lg font-semibold text-foreground">Clientes</p>
      </div>

      <div className="flex-1 min-h-0 overflow-auto">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-white z-10">
            <tr className="border-b border-border bg-primary/5">
              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Cliente</th>

              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Telefone</th>

              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Email</th>

              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">CPF</th>

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