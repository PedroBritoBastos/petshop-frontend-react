import type { LoginFormData } from "../types/LoginFormData";
import type { Client } from "../../client/types/Client";

import { login, logout, getLoggedClient } from "../../../services/auth/authService";

import { useAuthContext } from "../../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const authContext = useAuthContext();
  const navigate = useNavigate();

  /* 
    - pega os dados do service
    - atualiza o estado global
  */
  async function loginClient(loginFormData: LoginFormData) {
    try {
      const client: Client = await login(loginFormData);
      authContext.login(client);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  }

  async function logoutClient() {
    try {
      await logout();
      authContext.logout();
      navigate("/login");
    } catch (error) {
      if (error instanceof Error) {
        //  console.log(error.message);
      }
    }
  }

  async function isClientLogged() {
    try {
      return await getLoggedClient();
    } catch (error) {
      if (error instanceof Error) {
        //  console.log(error.message);
      }
    }
  }

  return { loginClient, logoutClient, isClientLogged };
}
