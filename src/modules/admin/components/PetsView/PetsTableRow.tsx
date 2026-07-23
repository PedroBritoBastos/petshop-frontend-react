import type { Pet } from "../../../../types/Pet"

interface Props {
  pet: Pet;
}

export function PetsTableRow({ pet }: Props) {
  return (
    <>
      <tr className="border-b border-border hover:bg-primary/5 transition-colors">
        <td className="p-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold"
            >
              {pet.name[0].toUpperCase()}
            </div>

            <p className="font-semibold text-foreground">
              {pet.name}
            </p>
          </div>
        </td>

        <td className="p-4 text-muted-foreground">
          {pet.adoptionClientId}
        </td>

        <td className="p-4 text-muted-foreground">{pet.weight} kg</td>

        <td className="p-4 text-muted-foreground">{pet.age} anos</td>
      </tr>
    </>
  )
}