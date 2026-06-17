type Props = {
  name: string;
  age: number;
  imageUrl: string;
}

export function AvailableAdoptionCard({
  name = 'Pet',
  age = 0,
}: Props) {
  return (
    <div
      className="border-accent border-1 rounded-md overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Imagem do pet */}
      <div className="h-[300px] border-b-1 border-accent">
        <img src={undefined} alt="name" className="w-full h-full" />
      </div>
      {/* Imagem do pet */}


      <div className="p-6">
        <div className="my-2">
          <p className="text-accent-foreground text-xl font-bold">{name}</p>
          <p className="text-accent-foreground text-md">Espécie</p>
        </div>
        <div className="flex justify-between">
          <p className="text-accent-foreground text-md">{age} anos</p>

          {/* TO DO - implementar funcionalidade */}
          <button

            className="text-accent-foreground text-md bg-primary/10 py-2 px-4 rounded-md cursor-pointer hover:shadow-md"
          >
            Adotar
          </button>
        </div>
      </div>
    </div >

  )
}