import type { Pet } from "../../../types/Pet"

interface Props {
  pet: Pet;
}

export function AdoptedPetCard({ pet }: Props) {
  return (
    <div className="border-1 border-border rounded-md bg-white p-10 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
      {/* foto */}
      <div className="flex items-center justify-center">
        <div className="w-30 h-30 p-4 border-border border-2 rounded-full">
          <img src={pet.imageUrl} alt="foto" className="w-full h-full object-fit" />
        </div>
      </div>

      {/* nome */}
      <p className="text-center mt-5 text-2xl text-foreground font-semibold">{pet.name}</p>

    </div>
  )
}