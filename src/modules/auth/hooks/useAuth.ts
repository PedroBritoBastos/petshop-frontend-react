import { login } from "../../../services/auth/authService";
import type { LoginFormData } from "../types/LoginFormData";

export function useAuth() {
  async function loginClient(loginFormData: LoginFormData) {
    try {
      const response = await login(loginFormData);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  return { loginClient };
}
