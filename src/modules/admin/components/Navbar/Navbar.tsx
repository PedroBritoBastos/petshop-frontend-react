import { NavbarOption } from "./NavbarOption"
import { useViewModeContext } from "../../hooks/useViewModeContext";
import { useAuth } from "../../../auth/hooks/useAuth";

export function Navbar() {
  const { activeOption, changeActiveOption } = useViewModeContext();
  const auth = useAuth();

  function handleNavbarOptionClick(optionName: string): void {
    changeActiveOption(optionName);
  }

  async function handleLogout(event: React.MouseEvent<HTMLButtonElement>) {
    try {
      event.preventDefault();
      event.stopPropagation();
      await auth.logoutClient();
    }
    catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="flex flex-col md:flex-row">
      <nav
        className="md:w-60 lg:w-80 md:h-screen justify-center md:justify-start border-b md:border-b-0 md:border-r-1 border-border py-5 md:py-10 px-3 md:px-6"
      >
        <div className="mb-5 md:mb-10">
          <h1 className="text-2xl text-start font-bold text-foreground">Administrativo</h1>
        </div>

        {/* Options */}
        <div className="flex md:flex-col gap-1 md:gap-4">
          <NavbarOption optionName='Painel' isActive={activeOption === 'Painel'} onClick={handleNavbarOptionClick}>
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
              className="lucide lucide-chart-column-big-icon lucide-chart-column-big"
            >
              <path d="M3 3v16a2 2 0 0 0 2 2h16" />
              <rect x="15" y="5" width="4" height="12" rx="1" />
              <rect x="7" y="8" width="4" height="9" rx="1" />
            </svg>
          </NavbarOption>
          <NavbarOption optionName="Pets" isActive={activeOption === 'Pets'} onClick={handleNavbarOptionClick}>
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
              className="lucide lucide-dog-icon lucide-dog"
            >
              <path d="M11.25 16.25h1.5L12 17z" />
              <path d="M16 14v.5" />
              <path
                d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"
              />
              <path d="M8 14v.5" />
              <path
                d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"
              />
            </svg>
          </NavbarOption>
          <NavbarOption optionName="Clientes" isActive={activeOption === 'Clientes'} onClick={handleNavbarOptionClick}>
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
          </NavbarOption>
          <NavbarOption optionName="Serviços" isActive={activeOption === 'Serviços'} onClick={handleNavbarOptionClick}>
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
              className="lucide lucide-scissors-icon lucide-scissors"
            >
              <circle cx="6" cy="6" r="3" />
              <path d="M8.12 8.12 12 12" />
              <path d="M20 4 8.12 15.88" />
              <circle cx="6" cy="18" r="3" />
              <path d="M14.8 14.8 20 20" />
            </svg>
          </NavbarOption>
        </div>
        {/* Options */}

        {/* Botao de logout */}
        <button
          onClick={handleLogout}
          className="bg-primary/10 hover:bg-primary/50 text-foreground mt-10 cursor-pointer text-xs sm:text-md md:text-lg font-semibold flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-colors md:w-full"
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
            className="lucide lucide-log-out-icon lucide-log-out"
          >
            <path d="m16 17 5-5-5-5" />
            <path d="M21 12H9" />
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          </svg>
          Sair
        </button >
        {/* Botao de logout */}
      </nav>
    </div>
  )
}