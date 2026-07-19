import { useNavigate } from "react-router-dom";

type Props = {
  name: string;
  age: number;
  imageUrl: string;
  id: string;
}

export function AvailableAdoptionCard({
  name = 'Pet',
  age = 0,
  imageUrl,
  id
}: Props) {

  const navigate = useNavigate();

  // redireciona para a pagina de adocao
  function handleAdopt(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
    navigate(`/pet/adopt/${id}`)
  }

  return (
    <div
      className="border-accent border-1 rounded-md overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Imagem do pet */}
      <div className="h-[300px] border-b-1 border-accent">
        <img src={imageUrl} alt="name" className="w-full h-full" />
      </div>
      {/* Imagem do pet */}

      <div className="p-6">
        <div className="my-2">
          <p className="text-accent-foreground text-xl font-bold">{name}</p>
          <p className="text-accent-foreground text-md">Espécie</p>
        </div>
        <div className="flex justify-between">
          <p className="text-accent-foreground text-md">{age} anos</p>

          {/* botao de redirecionamento para a pagina de adocao */}
          <button
            onClick={handleAdopt}
            className="text-accent-foreground text-md bg-primary/10 py-2 px-4 rounded-md cursor-pointer hover:shadow-md"
          >
            Adotar
          </button>
          {/* botao de redirecionamento para a pagina de adocao */}

        </div>
      </div>
    </div>
  )
}



