import type { Client } from "../../../client/types/Client"

interface Props {
  client: Client;
}

export function ClientsTableRow({ client }: Props) {
  return (
    <>
      <tr className="border-b border-border hover:bg-primary/5 transition-colors">
        <td className="p-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold"
            >
              {client.name[0].toUpperCase()}
            </div>

            <p className="font-semibold text-foreground">
              {client.name}
            </p>
          </div>
        </td>

        <td className="p-4 text-muted-foreground">
          {client.phone ? client.phone : "Não informado"}
        </td>

        <td className="p-4 text-muted-foreground">
          {client.email}
        </td>

        <td className="p-4 text-muted-foreground">
          {client.cpf}
        </td>
      </tr>
    </>
  )
}