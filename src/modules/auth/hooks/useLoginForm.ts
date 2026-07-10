import { useState } from "react";
import { useAuth } from "./useAuth";
import { useErrorMessageContext } from "../../../hooks/useErrorMessageContext";

export function useLoginForm() {
  const { loginClient } = useAuth();
  const errorMessageContext = useErrorMessageContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();

    try {
      const loginFormData = { email, password };
      await loginClient(loginFormData);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
        errorMessageContext.open();
      }
    }
  }

  return {
    email,
    password,
    errorMessage,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
}
