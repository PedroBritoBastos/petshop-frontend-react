import type { LoginFormData } from "../../modules/auth/types/LoginFormData";

const API = import.meta.env.VITE_API_URL;

export async function login(loginFormData: LoginFormData) {
  // envia dados para a api
  const response = await fetch(`${API}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginFormData),
  });

  // lança erro caso tenha
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  // retorna os dados
  return (await response.json()).client;
}

export async function logout() {
  // envia dados para a api
  const response = await fetch(`${API}/auth/logout`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  // lança erro caso tenha
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
}

export async function getLoggedClient() {
  const response = await fetch(`${API}/auth/get`, { credentials: "include" });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return (await response.json()).result;
}

export async function verifyIfLoggedClientIsAdmin() {
  const response = await fetch(`${API}/auth/admin/verify`, { credentials: "include" });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return (await response.json()).result;
}
