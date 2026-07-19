import { useAuthContext } from "../../../hooks/useAuthContext"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePetService } from "../../../hooks/usePetService";
import type { Pet } from "../../../types/Pet";

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
  }, [authContext.isLogged, authContext.loading, navigate]);

  // pega os dados do pet pelo id
  useEffect(() => {
    async function fetchPetById() {
      try {
        const pet = await petService.getPetById(petId as string);
        setPet(pet);
        setLoading(false);
      }
      catch (error) {
        if (error instanceof Error) {
          console.log(error)
        }
      }
    }

    fetchPetById();
  }, []);

  // não renderiza nada enquanto o contexto está carregando o cliente
  if (authContext.loading || loading) {
    return null;
  }

  return (
    <div>
      {authContext.loggedClient?.email}
      {pet?.name}
    </div>
  )
}