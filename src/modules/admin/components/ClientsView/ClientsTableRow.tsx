export function ClientsTableRow() {
  return (
    <>
      <tr className="border-b border-border hover:bg-primary/5 transition-colors">
        <td className="p-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold"
            >
              {'A'}
            </div>

            <p className="font-semibold text-foreground">
              {'name'}
            </p>
          </div>
        </td>

        <td className="p-4 text-muted-foreground">
          {'phone'}
        </td>

        <td className="p-4 text-muted-foreground">
          {'email'}
        </td>

        <td className="p-4 text-muted-foreground">
          {'cpf'}
        </td>

        <td className="p-4">
          <span
            className="bg-primary/10 text-foreground py-1 px-3 rounded-full text-xs font-semibold"
          >
            {'1'}
          </span>
        </td>
      </tr>
    </>
  )
}