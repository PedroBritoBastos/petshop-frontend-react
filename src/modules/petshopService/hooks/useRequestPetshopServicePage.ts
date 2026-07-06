import { useAuthContext } from "../../../hooks/useAuthContext";
import { usePetService } from "../../../hooks/usePetService";
import { useState, useEffect } from "react";

export function useRequestPetshopServicePage() {
  const authContext = useAuthContext();
  const petService = usePetService();

  const [clientAdoptedPets, setClientAdoptedPets] = useState([]);

  /* o effect precisa chamar o service e guardar todos os pets adotados do cliente logado no estado */
  useEffect(() => {
    async function loadClientAdoptedPets() {
      const pets = await petService.getAdoptedPetsByClientId(authContext.loggedClient?.id as string);
      setClientAdoptedPets(pets);
    }
    loadClientAdoptedPets();
  }, []);

  return { clientAdoptedPets };
}
