import { useEffect, useState } from "react";
import { useClientService } from "../../client/hooks/clientService/useClientService";
import { usePetService } from "../../../hooks/usePetService";
import { usePetshopServiceService } from "../../../hooks/usePetshopServiceService";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

import type { Pet } from "../../../types/Pet";
import type { Client } from "../../client/types/Client";
import type { PetshopService } from "../../petshopService/types/PetshopService";

export function useAdminPage() {
  const clientService = useClientService();
  const petService = usePetService();
  const petshopServiceService = usePetshopServiceService();
  const authContext = useAuthContext();
  const navigate = useNavigate();

  const [clients, setClients] = useState<Client[]>([]);
  const [pets, setPets] = useState<Pet[]>([]);
  const [adoptedPets, setAdoptedPets] = useState<Pet[]>([]);
  const [petshopServices, setPetshopServices] = useState<PetshopService[]>([]);

  // carrega os dados quando a pagina carrega
  useEffect(() => {
    async function load() {
      try {
        // buscando os dados da api
        const clientsResponse = await clientService.getAllClients();
        const petsResponse: Pet[] = await petService.getAllPets();
        const petshopServices: PetshopService[] = await petshopServiceService.getClientPetshopServices();

        // filtrando pets adotados
        const filteredAdoptedPets = petsResponse.filter((pet) => pet.isAdopted);
        setAdoptedPets(filteredAdoptedPets);

        // atualizando estados da pagina
        setClients(clientsResponse);
        setPets(petsResponse);
        setPetshopServices(petshopServices);
      } catch (error) {
        if (error instanceof Error) {
          //console.log(error);
        }
      }
    }

    load();
  }, []);

  // redireciona para home se não estiver logado
  useEffect(() => {
    if (!authContext.isLogged && !authContext.loading) {
      navigate("/");
    }
  }, []);

  return { clients, pets, adoptedPets, petshopServices };
}
