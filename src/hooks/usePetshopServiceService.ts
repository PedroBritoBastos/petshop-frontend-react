import type { RequestPetshopServiceFormData } from "../modules/petshopService/types/RequestPetshopService";
import { getPetshopServices, request } from "../services/petshopService/petshopServiceService";

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

  async function requestPetshopService(requestPetshopServiceFormData: RequestPetshopServiceFormData) {
    try {
      await request(requestPetshopServiceFormData);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    }
  }

  return { getClientPetshopServices, requestPetshopService };
}
