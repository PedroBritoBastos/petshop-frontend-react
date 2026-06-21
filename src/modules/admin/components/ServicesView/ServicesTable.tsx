export function ServicesTable() {
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
            <tr className="border-b border-border hover:bg-primary/5 transition-colors">
              <td className="p-4">
                <span
                  className="bg-primary/10 text-foreground py-1 px-3 rounded-full text-xs font-semibold"
                >
                  {'type'}
                </span>
              </td>

              <td className="p-4 text-muted-foreground">
                {'clientName'}
              </td>

              <td className="p-4 text-muted-foreground">
                {'petName'}
              </td>

              <td className="p-4 text-muted-foreground">
                {'date'}
              </td>

              <td className="p-4 text-muted-foreground">
                {'executionDate'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}