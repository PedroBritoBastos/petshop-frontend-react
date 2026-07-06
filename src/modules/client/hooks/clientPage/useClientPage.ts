import { useState, useEffect } from "react";
import { usePetService } from "../../../../hooks/usePetService";

export function useClientPage() {
  const petService = usePetService();

  const [availablePets, setAvailablePets] = useState([]);

  useEffect(() => {
    async function loadAvailablePets() {
      const pets = await petService.getAvailable();
      setAvailablePets(pets);
    }
    loadAvailablePets();
  }, []);

  return {
    availablePets,
  };
}
