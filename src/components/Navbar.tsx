import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { useNavbar } from "../hooks/useNavbar";

export function Navbar() {
  const { isLogged, loggedClient } = useAuthContext();
  const navigate = useNavigate();
  const navbar = useNavbar();

  // impede a renderizacao do conteudo enquando os dados carregam
  if (navbar.loading) {
    return null;
  }

  return (
    <nav className="w-full border-b border-accent p-4 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      {/* Logo + Login/Usuário */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:gap-8">
        <h1 className="text-xl font-bold text-accent-foreground">
          Petshop
        </h1>

        {isLogged ? (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>

            <p className="text-foreground break-all">
              {loggedClient?.email}
            </p>
          </div>
        ) : (
          <div className="flex items-center gap-4 text-foreground">
            <button
              className="hover:text-foreground/60 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Fazer login
            </button>

            <button
              className="hover:text-foreground/60 cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Cadastrar-se
            </button>
          </div>
        )}
      </div>

      {/* Menu */}
      {isLogged && (
        <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-foreground">
          <button className="flex items-center gap-2 hover:text-foreground/60 cursor-pointer" onClick={navbar.handleLogout}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-log-out"
            >
              <path d="m16 17 5-5-5-5" />
              <path d="M21 12H9" />
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            </svg>

            Sair
          </button>

          {/* se for admin: apresenta apenas a opcao de ir para painel */}
          {/* se for cliente: apresenta as opcoes de cliente */}
          {navbar.isAdmin ? (
            <button className="hover:text-foreground/60 cursor-pointer" onClick={() => navigate("/admin")}>
              Painel administrativo
            </button>
          ) : (
            <>
              <button disabled={navbar.isAdmin} className="hover:text-foreground/60 cursor-pointer" onClick={() => navigate("/my-adoptions")}>
                Minhas adoções
              </button>

              <button disabled={navbar.isAdmin} className="hover:text-foreground/60 cursor-pointer" onClick={() => navigate("/pet/register")}>
                Cadastrar um pet
              </button>

              <button disabled={navbar.isAdmin} className="hover:text-foreground/60 cursor-pointer" onClick={() => navigate("/petshop-services/request")}>
                Solicitar um serviço
              </button>
            </>
          )
          }
        </div>
      )}
    </nav>
  );
}