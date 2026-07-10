import type { PetshopService } from "../../petshopService/types/PetshopService";
import type { PetshopServiceWithPetName } from "../../petshopService/types/PetshopService";
import type { Pet } from "../../../types/Pet";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { usePetService } from "../../../hooks/usePetService";
import { usePetshopServiceService } from "../../../hooks/usePetshopServiceService";
import { useState, useEffect } from "react";

export function useMyAdoptionsPage() {
  const authContext = useAuthContext();
  const petService = usePetService();
  const petshopServiceService = usePetshopServiceService();
  const loggedClient = authContext.loggedClient;

  const [clientAdoptedPets, setClientAdoptedPets] = useState<Pet[]>([]);
  const [clientPetshopServices, setClientPetshopServices] = useState<PetshopServiceWithPetName[]>([]);
  const [loading, setLoading] = useState(true);

  /* O effect precisa chamar o service e guardar todos os pets adotados do cliente logado no estado logo assim que carregar a pagina */
  /* O effect precisa chamar o service e guardar todos os serviços do cliente logado no estado quando carregar a página */
  useEffect(() => {
    async function loadData() {
      /* vai trazer os pets adotados do cliente */
      const pets = await petService.getAdoptedPetsByClientId(authContext.loggedClient?.id as string);
      setClientAdoptedPets(pets);

      /* cria uma nova lista com os nomes dos pets de acordo com o petId */
      const petshopServices = await petshopServiceService.getClientPetshopServices();
      const petshopServicesWithPetName = petshopServices.map((petshopService: PetshopService) => ({
        ...petshopService,
        petName: pets.find((pet: Pet) => pet.id === petshopService.petId)?.name,
      }));
      setClientPetshopServices(petshopServicesWithPetName);
      setLoading(false);
    }

    loadData();
  }, [authContext.loggedClient]);

  return { loggedClient, clientAdoptedPets, loading, clientPetshopServices };
}
