import type { RegisterFormData } from "../../types/RegisterFormData";
import type { Client } from "../../types/Client";

import { register } from "../../../../services/client/clientService";

import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../hooks/useAuthContext";

export function useClientService() {
  const navigate = useNavigate();
  const { loginAfterRegister } = useAuthContext();

  async function registerClient(registerFormData: RegisterFormData) {
    try {
      const registeredClient: Client = await register(registerFormData);
      loginAfterRegister(registeredClient);
      navigate("/client");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  }

  return { registerClient };
}
