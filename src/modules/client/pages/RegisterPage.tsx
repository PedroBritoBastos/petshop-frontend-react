import { RegisterForm } from "../components/RegisterForm"

import { useAuthContext } from "../../../hooks/useAuthContext"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function RegisterPage() {
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
    <div className="w-full h-screen flex gap-5 bg-primary-foreground overflow-auto">
      <div
        className="bg-ring w-[50%] hidden md:block bg-cover bg-[80%_90%] relative"
        style={{ backgroundImage: "url('assets/register-page-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-ring/40"></div>
      </div>

      <RegisterForm />
    </div>

  )
}