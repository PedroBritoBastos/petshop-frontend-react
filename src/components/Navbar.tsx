import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const { isLogged } = useAuthContext();
  const navigate = useNavigate();

  return (
    <nav className="w-full border-accent border-b-1 p-4 flex flex-col md:flex-row md:justify-between gap-5">
      <div className="flex items-center justify-between gap-5">
        <div className="flex items-center gap-2">
          <h1 className="text-xl text-accent-foreground font-bold">Petshop</h1>
        </div>

        {/* links quando usuario nao estiver logado */}
        {isLogged ? (
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-user-icon lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>

            <p className="text-foreground">{'email'}</p>
          </div>
        ) : (
          <div className="text-foreground flex items-center gap-4">
            <button
              className="hover:text-foreground/60 cursor-pointer"
              onClick={() => navigate('/login')}
            >
              Fazer login
            </button>
            <button
              className="hover:text-foreground/60 cursor-pointer"
              onClick={() => navigate('/register')}
            >
              Cadastrar-se
            </button>
          </div>
        )
        }
        {/* links quando usuario nao estiver logado */}
      </div >
    </nav >
  )
}