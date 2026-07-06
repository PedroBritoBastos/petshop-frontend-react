import { getPetshopServices } from "../services/petshopService/petshopServiceService";

export function usePetshopServiceService() {
  async function getClientPetshopServices() {
    try {
      return await getPetshopServices();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  return { getClientPetshopServices };
}
