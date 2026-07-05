//import { useNavigate } from "react-router-dom";
import { useAuth } from "../modules/auth/hooks/useAuth";

export function useNavbar() {
  //const navigate = useNavigate();
  const auth = useAuth();

  async function handleLogout(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    await auth.logoutClient();
  }

  async function handleNavigateToAdoptionsPage(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  async function handleNavigateToRegisterPetPage(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  async function handleNavigateToRequestPetshopServicePage(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  return {
    handleLogout,
    handleNavigateToAdoptionsPage,
    handleNavigateToRegisterPetPage,
    handleNavigateToRequestPetshopServicePage,
  };
}
