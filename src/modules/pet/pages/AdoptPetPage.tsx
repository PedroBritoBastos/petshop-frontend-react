import { useAuthContext } from "../../../hooks/useAuthContext"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function AdoptPetPage() {
  const authContext = useAuthContext();
  const navigate = useNavigate();

  // verifica se o cliente está logado
  // redireciona para login caso não esteja 
  useEffect(() => {
    if (!authContext.loading && !authContext.isLogged) {
      navigate("/login");
    }
  }, [authContext.isLogged, authContext.loading, navigate]);

  // não renderiza nada enquanto o contexto está carregando o cliente
  if (authContext.loading) {
    return null;
  }

  return (
    <div>
      AdoptPet
    </div>
  )
}