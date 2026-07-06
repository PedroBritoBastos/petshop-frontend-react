import { useAuthContext } from "../../../hooks/useAuthContext";
import { usePetService } from "../../../hooks/usePetService";
import { usePetshopServiceService } from "../../../hooks/usePetshopServiceService";
import { useState, useEffect } from "react";

export function useMyAdoptionsPage() {
  const authContext = useAuthContext();
  const petService = usePetService();
  const petshopServiceService = usePetshopServiceService();
  const loggedClient = authContext.loggedClient;

  const [clientAdoptedPets, setClientAdoptedPets] = useState([]);
  const [clientPetshopServices, setClientPetshopServices] = useState([]);

  /* O effect precisa chamar o service e guardar todos os pets adotados do cliente logado no estado logo assim que carregar a pagina */
  /* O effect precisa chamar o service e guardar todos os serviços do cliente logado no estado quando carregar a página */
  useEffect(() => {
    async function loadClientAdoptedPets() {
      const pets = await petService.getAdoptedPetsByClientId(authContext.loggedClient?.id as string);
      setClientAdoptedPets(pets);
    }

    async function loadClientPetshopServices() {
      const petshopServices = await petshopServiceService.getClientPetshopServices();
      setClientPetshopServices(petshopServices);
    }

    loadClientAdoptedPets();
    loadClientPetshopServices();
  }, []);

  return { loggedClient, clientAdoptedPets, clientPetshopServices };
}
