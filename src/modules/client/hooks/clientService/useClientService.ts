import type { RegisterFormData } from "../../types/RegisterFormData";
import { register } from "../../../../services/client/clientService";

export function useClientService() {
  async function registerClient(registerFormData: RegisterFormData) {
    const data = await register(registerFormData);
    return data;
  }

  return { registerClient };
}
