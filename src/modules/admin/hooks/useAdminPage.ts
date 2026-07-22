import { useEffect, useState, useCallback } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export function useAdminPage() {
  const auth = useAuth();
  const authContext = useAuthContext();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  // evitar re-renderização desnecessária
  const load = useCallback(async () => {
    try {
      const isAdmin = await auth.isAdmin();

      if (!isAdmin) {
        navigate("/");
      }

      console.log(isAdmin);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [auth, navigate]);

  // verifica se o cliente logado é o admin
  useEffect(() => {
    load();
  }, []);

  // garante que o conteudo da pagina carregue apenas quando a autenticação for validada
  // trava o carregamento da pagina enquanto os dados estão sendo carregados
  if (authContext.loading || loading) {
    return null;
  }

  return { loading };
}
