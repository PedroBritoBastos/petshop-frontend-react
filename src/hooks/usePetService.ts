import { getAvailablePets } from "../services/pet/petService";

export function usePetService() {
  async function getAvailable() {
    try {
      return await getAvailablePets();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  return { getAvailable };
}
