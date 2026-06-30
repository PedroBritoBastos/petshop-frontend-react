import { login } from "../../../services/auth/authService";

export function useAuth() {
  async function loginClient(formData: FormData) {
    try {
      await login(formData);
    } catch (error) {
      console.log(error);
    }
  }

  return { loginClient };
}
