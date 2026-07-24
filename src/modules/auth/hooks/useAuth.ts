import type { LoginFormData } from "../types/LoginFormData";
import type { Client } from "../../client/types/Client";

import { login, logout, getLoggedClient, verifyIfLoggedClientIsAdmin } from "../../../services/auth/authService";

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
      // atualizando estado global com o cliente logado
      const client: Client = await login(loginFormData);
      authContext.login(client);

      // redireciona para a pagina de admin se o usuário for um admin
      const isAdmin = await verifyIfLoggedClientIsAdmin();
      if (isAdmin) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      if (error instanceof Error) {
        throw error;
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
        // console.log(error.message);
      }
    }
  }

  async function isAdmin() {
    try {
      return await verifyIfLoggedClientIsAdmin();
    } catch (error) {
      if (error instanceof Error) {
        // console.log(error.message);
      }
    }
  }

  return { loginClient, logoutClient, isClientLogged, isAdmin };
}
