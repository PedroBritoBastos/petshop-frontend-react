import { login } from "../../../services/auth/authService";
import { useAuthContext } from "../../../hooks/useAuthContext";
import type { LoginFormData } from "../types/LoginFormData";

export function useAuth() {
  const authContext = useAuthContext();

  /* 
    - pega os dados do service
    - atualiza o estado global
  */
  async function loginClient(loginFormData: LoginFormData) {
    try {
      const response = await login(loginFormData);
      authContext.login();
      return response;
    } catch (error) {
      console.log("Ocorreu um erro:" + error);
    }
  }

  return { loginClient };
}
