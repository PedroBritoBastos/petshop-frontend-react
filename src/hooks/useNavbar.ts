import { useAuth } from "../modules/auth/hooks/useAuth";

export function useNavbar() {
  const auth = useAuth();

  async function handleLogout(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    await auth.logoutClient();
  }

  return {
    handleLogout,
  };
}
