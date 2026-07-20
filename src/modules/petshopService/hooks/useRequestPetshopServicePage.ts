import type { Pet } from "../../../types/Pet";

import { useAuthContext } from "../../../hooks/useAuthContext";
import { usePetService } from "../../../hooks/usePetService";
import { usePetshopServiceService } from "../../../hooks/usePetshopServiceService";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useErrorMessageContext } from "../../../hooks/useErrorMessageContext";

export function useRequestPetshopServicePage() {
  const authContext = useAuthContext();
  const errorMessageContext = useErrorMessageContext();
  const petService = usePetService();
  const petshopServiceService = usePetshopServiceService();
  const navigate = useNavigate();

  const loggedClientEmail = authContext.loggedClient?.email;
  const [clientAdoptedPets, setClientAdoptedPets] = useState<Pet[]>([]);
  const [service, setService] = useState("");
  const [selectedPetId, setSelectedPetId] = useState("");
  const [executionDate, setExecutionDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!authContext.isLogged) {
      navigate("/");
    }
  }, [authContext.isLogged, navigate]);

  /* o effect precisa chamar o service e guardar todos os pets adotados do cliente logado no estado logo assim que carregar a pagina */
  useEffect(() => {
    async function loadClientAdoptedPets() {
      setLoading(true);
      try {
        const pets = await petService.getAdoptedPetsByClientId(authContext.loggedClient?.id as string);
        setClientAdoptedPets(pets);
      } finally {
        setLoading(false);
      }
    }
    loadClientAdoptedPets();
  }, [authContext.loggedClient]);

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
    try {
      e.preventDefault();
      e.stopPropagation();

      const requestPetshopServiceFormData = {
        clientId: authContext.loggedClient?.id as string,
        petId: selectedPetId,
        type: service,
        executionDate: new Date(executionDate),
      };

      await petshopServiceService.requestPetshopService(requestPetshopServiceFormData);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        errorMessageContext.open();
      }
    }
  }

  return {
    clientAdoptedPets,
    service,
    selectedPetId,
    executionDate,
    loading,
    loggedClientEmail,
    error,
    handleServiceChange,
    handlePetChange,
    handleExecutionDateChange,
    handleSubmit,
  };
}
