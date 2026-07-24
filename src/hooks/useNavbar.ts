import { useAuth } from "../modules/auth/hooks/useAuth";
import { useState, useEffect } from "react";

export function useNavbar() {
  const auth = useAuth();

  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);

  // verifica se o usuario é admin para mostrar a opção de ir para painel adminstrativo
  useEffect(() => {
    async function verify() {
      setLoading(true);
      const isAdminResponse = await auth.isAdmin();
      setIsAdmin(isAdminResponse);
      setLoading(false);
    }

    verify();
  }, []);

  async function handleLogout(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    await auth.logoutClient();
  }

  return {
    isAdmin,
    loading,
    handleLogout,
  };
}
