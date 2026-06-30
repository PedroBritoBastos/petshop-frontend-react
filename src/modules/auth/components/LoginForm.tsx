import { useLoginForm } from "../hooks/useLoginForm"

import { Form } from "../../../components/ui/Form"

export function LoginForm() {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  } = useLoginForm();

  return (
    <Form.Root onSubmit={handleSubmit}>
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
        onChange={handleEmailChange}
      />

      <Form.Field
        id="password"
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        onChange={handlePasswordChange}
      />

      <Form.Button type="submit">
        Entrar
      </Form.Button>
    </Form.Root>
  );
}