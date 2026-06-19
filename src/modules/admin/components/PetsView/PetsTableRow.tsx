export function PetsTableRow() {
  return (
    <>
      <tr className="border-b border-border hover:bg-primary/5 transition-colors">
        <td className="p-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold"
            >
              {'P'}
            </div>

            <p className="font-semibold text-foreground">
              {'Pet'}
            </p>
          </div>
        </td>

        <td className="p-4 text-muted-foreground">
          {'Client'}
        </td>

        <td className="p-4 text-muted-foreground">
          {'Cpf'}
        </td>

        <td className="p-4 text-muted-foreground">{"Weight"} kg</td>

        <td className="p-4 text-muted-foreground">{'Age'} anos</td>
      </tr>
    </>
  )
}