import { getAvailablePets, getClientAdoptedPets, create, getById } from "../services/pet/petService";

export function usePetService() {
  async function getAvailable() {
    try {
      return await getAvailablePets();
    } catch (error) {
      if (error instanceof Error) {
        return;
      }
    }
  }

  async function register(registerPetFormData: FormData) {
    try {
      return await create(registerPetFormData);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    }
  }

  async function getAdoptedPetsByClientId(clientId: string) {
    try {
      return await getClientAdoptedPets(clientId);
    } catch (error) {
      if (error instanceof Error) {
        return;
      }
    }
  }

  async function getPetById(id: string) {
    try {
      return await getById(id);
    } catch (error) {
      if (error instanceof Error) {
        return;
      }
    }
  }

  return { getAvailable, getAdoptedPetsByClientId, register, getPetById };
}
