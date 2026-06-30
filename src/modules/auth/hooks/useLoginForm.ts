import { useState } from "react";
import { useAuth } from "./useAuth";

export function useLoginForm() {
  const { loginClient } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [error, setError] = useState("");

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !password) return;

    const data = { email, password };
    const response = await loginClient(data);
    console.log(response);
  }

  return {
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    // error,
  };
}
