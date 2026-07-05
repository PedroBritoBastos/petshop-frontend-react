import { LoginForm } from "../components/LoginForm"
import { useAuthContext } from "../../../hooks/useAuthContext"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import loginPageBackgroundImage from "../../../assets/login-page-image.jpg"

export default function LoginPage() {
  const authContext = useAuthContext();
  const navigate = useNavigate();

  /* verifica se o cliente está logado. Se não estiver logado, deve ser redirecionado para a pagina principal */
  useEffect(() => {
    if (authContext.isLogged) {
      navigate("/");
      return;
    }
  }, [authContext.isLogged]);

  return (
    <div className="flex items-center md:items-start w-full h-screen">
      <div
        className="bg-ring w-[50%] h-full hidden md:block bg-cover bg-[80%_50%] relative"
        style={{ backgroundImage: `url(${loginPageBackgroundImage})` }}
      >
        <div className="absolute inset-0 bg-ring/40"></div>
      </div>

      <LoginForm />
    </div>
  )
}