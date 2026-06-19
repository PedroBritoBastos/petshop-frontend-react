import { PetsTableRow } from "./PetsTableRow"

export function PetsTable() {
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

              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">CPF</th>

              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Peso</th>

              <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Idade</th>
            </tr>
          </thead>

          <tbody>
            <PetsTableRow />
          </tbody>
        </table>
      </div>
    </div>

  )
}