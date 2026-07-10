import { useLoginForm } from "../hooks/useLoginForm"
import { ErrorMessage } from "../../../components/ui/ErrorMessage";
import { Form } from "../../../components/ui/Form"

export function LoginForm() {
  const {
    email,
    password,
    errorMessage,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  } = useLoginForm();

  return (
    <Form.Root onSubmit={handleSubmit}>
      <ErrorMessage message={errorMessage} />
      <Form.Legend legend="Login" />
      <Form.Link
        title="Não possui conta?"
        href="/register"
        linkTitle="Cadastre-se."
      />

      <Form.Field
        id="email"
        label="Email"
        type="text"
        placeholder="example@email.com"
        value={email}
        onChange={handleEmailChange}
      />

      <Form.Field
        id="password"
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={handlePasswordChange}
      />

      <Form.Button type="submit">
        Entrar
      </Form.Button>
    </Form.Root>
  );
}