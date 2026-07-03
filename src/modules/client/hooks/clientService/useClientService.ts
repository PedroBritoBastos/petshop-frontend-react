import type { RegisterFormData } from "../../types/RegisterFormData";
import { register } from "../../../../services/client/clientService";

export function useClientService() {
  async function registerClient(registerFormData: RegisterFormData) {
    try {
      return await register(registerFormData);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  }

  return { registerClient };
}
