import type { Pet } from "../../../types/Pet";

import { useAuthContext } from "../../../hooks/useAuthContext";
import { usePetService } from "../../../hooks/usePetService";
import { useState, useEffect } from "react";

export function useRequestPetshopServicePage() {
  const authContext = useAuthContext();
  const petService = usePetService();

  const [clientAdoptedPets, setClientAdoptedPets] = useState<Pet[]>([]);

  /* o effect precisa chamar o service e guardar todos os pets adotados do cliente logado no estado logo assim que carregar a pagina */
  useEffect(() => {
    async function loadClientAdoptedPets() {
      const pets = await petService.getAdoptedPetsByClientId(authContext.loggedClient?.id as string);
      setClientAdoptedPets(pets);
    }
    loadClientAdoptedPets();
  }, []);

  return { clientAdoptedPets };
}
