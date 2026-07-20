import { useAuthContext } from "../../../hooks/useAuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePetService } from "../../../hooks/usePetService";

import type { Pet } from "../../../types/Pet";

import { NavigateToHomeButton } from "../../../components/ui/NavigateToHomeButton";
import { Info } from "../components/Info";

export default function AdoptPetPage() {
  const authContext = useAuthContext();
  const navigate = useNavigate();
  const petService = usePetService();
  const { petId } = useParams();

  const [pet, setPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(true);

  // verifica se o cliente está logado
  // redireciona para login caso não esteja
  useEffect(() => {
    if (!authContext.loading && !authContext.isLogged) {
      navigate("/login");
    }
  }, [authContext.loading, authContext.isLogged, navigate]);


  // pega os dados do pet e atualiza o estado da pagina
  useEffect(() => {
    async function fetchData() {
      try {
        const pet = await petService.getPetById(petId as string);
        setPet(pet);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [petId]);


  // trava o carregamento da pagina enquanto os dados estão sendo carregados
  if (authContext.loading || loading) {
    return null;
  }

  return (
    <div className="bg-primary/10 h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-white border-b border-border p-4 shrink-0">
        <NavigateToHomeButton />
      </nav>

      {/* Conteúdo */}
      <div className="flex-1 min-h-0 p-4 md:p-6 lg:p-10 xl:p-16 px-4 md:px-12 lg:px-20 xl:px-32">
        <div className="w-full h-full bg-white rounded-md border border-border overflow-hidden flex flex-col md:flex-row p-4">

          {/* Foto */}
          <div className="shrink-0 md:flex-1 flex flex-col items-center justify-center gap-5 p-6">
            <div className="w-40 h-40 md:w-full md:h-full border-2 md:border-none border-primary rounded-full md:rounded-md overflow-hidden">
              <img
                src={pet?.imageUrl}
                alt="Foto do pet"
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className="text-4xl text-foreground text-center font-bold">
              {pet?.name}
            </h1>
          </div>

          {/* Informações */}
          <div className="flex-1 min-h-0 overflow-y-auto p-6 md:flex-[2]">
            <h2 className="text-xl text-foreground font-bold mb-6">
              Dados do pet
            </h2>

            <div className="flex flex-col gap-4">
              <Info info="Idade" value={pet?.age as number} />
              <Info info="Peso" value={pet?.weight as string} />
            </div>

            <h2 className="text-xl text-foreground font-bold mt-10 mb-6">
              Dados do adotante
            </h2>

            <div className="flex flex-col gap-4 pb-6">
              <Info
                info="Cliente"
                value={authContext.loggedClient?.name as string}
              />
              <Info
                info="CPF"
                value={authContext.loggedClient?.cpf as string}
              />
              <Info
                info="Email"
                value={authContext.loggedClient?.email as string}
              />
              <Info
                info="Telefone"
                value={
                  authContext.loggedClient?.phone ??
                  "Não informado."
                }
              />

              {/* botão para prosseguir com a adoção */}
              <div className="flex items-center justify-end">
                <button className="bg-ring hover:bg-secondary text-lg text-primary-foreground font-semibold rounded-xl px-8 py-4 block w-fit cursor-pointer mt-4">
                  Finalizar adoção
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}