import type { RegisterFormData } from "../../types/RegisterFormData";
import { register } from "../../../../services/client/clientService";
import { useNavigate } from "react-router-dom";

export function useClientService() {
  const navigate = useNavigate();

  async function registerClient(registerFormData: RegisterFormData) {
    try {
      await register(registerFormData);
      navigate("/client");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  }

  return { registerClient };
}
