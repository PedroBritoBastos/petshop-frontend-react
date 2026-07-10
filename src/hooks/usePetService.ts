import { getAvailablePets, getClientAdoptedPets, create } from "../services/pet/petService";
import { useErrorMessageContext } from "./useErrorMessageContext";

export function usePetService() {
  const errorMessageContext = useErrorMessageContext();

  async function getAvailable() {
    try {
      return await getAvailablePets();
    } catch (error) {
      if (error instanceof Error) {
        errorMessageContext.updateErrorMessage(error.message);
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
        errorMessageContext.updateErrorMessage(error.message);
      }
    }
  }

  return { getAvailable, getAdoptedPetsByClientId, register };
}
