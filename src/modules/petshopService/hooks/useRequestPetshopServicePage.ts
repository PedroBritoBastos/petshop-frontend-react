import type { Pet } from "../../../types/Pet";

import { useAuthContext } from "../../../hooks/useAuthContext";
import { usePetService } from "../../../hooks/usePetService";
import { usePetshopServiceService } from "../../../hooks/usePetshopServiceService";
import { useState, useEffect } from "react";

export function useRequestPetshopServicePage() {
  const authContext = useAuthContext();
  const petService = usePetService();
  const petshopServiceService = usePetshopServiceService();

  const [clientAdoptedPets, setClientAdoptedPets] = useState<Pet[]>([]);
  const [service, setService] = useState("");
  const [selectedPetId, setSelectedPetId] = useState("");
  const [executionDate, setExecutionDate] = useState("");

  /* o effect precisa chamar o service e guardar todos os pets adotados do cliente logado no estado logo assim que carregar a pagina */
  useEffect(() => {
    async function loadClientAdoptedPets() {
      const pets = await petService.getAdoptedPetsByClientId(authContext.loggedClient?.id as string);
      setClientAdoptedPets(pets);
    }
    loadClientAdoptedPets();
  }, []);

  function handleServiceChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setService(e.target.value);
  }

  function handlePetChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedPetId(e.target.value);
  }

  function handleExecutionDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setExecutionDate(e.target.value);
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();

    const requestPetshopServiceFormData = {
      clientId: authContext.loggedClient?.id as string,
      petId: selectedPetId,
      type: service,
      executionDate: new Date(executionDate),
    };

    await petshopServiceService.requestPetshopService(requestPetshopServiceFormData);
  }

  return {
    clientAdoptedPets,
    service,
    selectedPetId,
    executionDate,
    handleServiceChange,
    handlePetChange,
    handleExecutionDateChange,
    handleSubmit,
  };
}
