import { useState, useEffect } from "react";
import { getAvailablePets } from "../../../../services/pet/petService";

export function useClientPage() {
  const [availablePets, setAvailablePets] = useState([]);

  useEffect(() => {
    async function getAvailablePetsResponse() {
      const response = await getAvailablePets();
      setAvailablePets(response.result);
      console.log(availablePets);
    }
    getAvailablePetsResponse();
  }, []);

  return { availablePets };
}
