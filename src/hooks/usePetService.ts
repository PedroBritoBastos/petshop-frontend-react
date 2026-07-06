import { getAvailablePets, getClientAdoptedPets, create } from "../services/pet/petService";

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

  async function register(registerPetFormData: FormData) {
    try {
      return await create(registerPetFormData);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  async function getAdoptedPetsByClientId(clientId: string) {
    try {
      return await getClientAdoptedPets(clientId);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  return { getAvailable, getAdoptedPetsByClientId, register };
}
