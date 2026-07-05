import type { RegisterFormData } from "../../types/RegisterFormData";
import type { Client } from "../../types/Client";

import { register } from "../../../../services/client/clientService";

import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../hooks/useAuthContext";

export function useClientService() {
  const navigate = useNavigate();
  const authContext = useAuthContext();

  async function registerClient(registerFormData: RegisterFormData) {
    try {
      const client: Client = await register(registerFormData);
      authContext.login(client);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  }

  return { registerClient };
}
