import { useState, useEffect } from "react";
import { usePetService } from "../../../../hooks/usePetService";

export function useClientPage() {
  const petService = usePetService();

  const [availablePets, setAvailablePets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadAvailablePets() {
      setLoading(true);
      const pets = await petService.getAvailable();
      setAvailablePets(pets);
      setLoading(false);
    }
    loadAvailablePets();
  }, []);

  return {
    availablePets,
    loading,
  };
}
